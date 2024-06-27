let currentShop = '';

$(() => {
    initLocalStorage();
    printShopList();

    // 매장 등록 버튼 이벤트 리스너
    $("#regShopBtn").on('click', () => {
        regidateShop();
        initInputShop();
    });

    // 매장 수정 버튼 이벤트 리스너
    $(".editShopBtn").on('click', (event) => {
        showEditShopAlert(event.target);
    });

    // 매장 삭제 버튼 이벤트 리스너
    $(".delShopBtn").on('click', (event) => {
        removeShop(event.target.id);
    });

    // 재고 등록 버튼 이벤트 리스너
    $("#regStockBtn").on('click', () => {
        regidateStock(currentShop);
        initInputStock();
    });

});

// 매장, 재고 저장소 초기화
const initLocalStorage = () => {
    if (localStorage) {
        if (!localStorage.getItem('shopSeq')) {
            localStorage.setItem("shopSeq", 0);
        }
        if (!localStorage.getItem('stockSeq')) {
            localStorage.setItem("stockSeq", 0);
        }
        if (!localStorage.getItem('shopList')) {
            localStorage.setItem("shopList", "[]");
        }
        if (!localStorage.getItem('stockList')) {
            localStorage.setItem("stockList", "[]");
        }
    }
};

// 매장 목록
const getShopList = () => {
    return JSON.parse(localStorage.getItem("shopList"));
};

// 매장 번호 등록
const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem("shopSeq")) + 1;
    localStorage.setItem("shopSeq", nextShopSeq);
    return nextShopSeq;
}

// 매장 번호 감소
const getDelShopSeq = () => {
    const delShopSeq = Number(localStorage.getItem("shopSeq")) - 1;
    localStorage.setItem("shopSeq", delShopSeq);
    return delShopSeq;
}

// 매장 목록 출력
const printShopList = () => {
    $("#shoptable").empty();
    getShopList().forEach((shop) => {
        $("#shoptable").append(`
        <tr>
            <th scope="row">${shop.shno}</th>
            <th scope="row">${shop.shname}</th>
            <th scope="row">${shop.shtotst}</th>
            <th scope="row"><button id=editShopBtn${shop.shno} class="editShopBtn">수정</button></th>
            <th scope="row"><button id=delShopBtn${shop.shno} class="delShopBtn">삭제</button></th>
        </tr>
    `);
    });

    // empty 수행 후 리스너 삭제 => 재생성
    $(".editShopBtn").on('click', (event) => {
        showEditShopAlert(event.target);
    });

    $(".delShopBtn").on('click', (event) => {
        removeShop(event.target.id);
    });

    // 매장 선택 이벤트 리스너
    $("#shoptable tr").on('click', (event) => {
        currentShop = event.currentTarget;
        // tr.style.backgroundColor = "lightgray";
        // $('.ttt').css('background-color', '#ffcc00');
        // event.target.css('background-color', 'lightgray');
        printStockList();
    });

}

// 매장 입력칸 초기화
const initInputShop = () => {
    $("#shname").val('');
}

// 매장 등록
const regidateShop = () => {
    const shopList = getShopList();
    shopList.push(new Shop(getNextShopSeq(), $("#shname").val(), 0));
    localStorage.setItem("shopList", JSON.stringify(shopList));
    printShopList();
};

// 매장 수정 알림창
const showEditShopAlert = (btn) => {
    const recentTr = btn.closest('th').closest('tr');
    const shname = $(recentTr.cells[1]).html();

    (async () => {
        const { value: newshname } = await Swal.fire({
            title: "매장정보 수정",
            input: "text",
            inputLabel: `현재 매장명: ${shname}`,
            inputPlaceholder: "매장명을 입력해주세요."
        });
        if (newshname) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "매장명이 변경되었습니다."
            });
            editShop(recentTr, newshname);
        }
    })()
}
// 매장 수정
const editShop = (tr, shname) => {
    $(tr.cells[1]).html(shname);
    const trno = Number($(tr.cells[0]).html());
    const shopList = getShopList();
    const editShop = shopList.find((shop) => shop.shno === trno);
    editShop.shname = shname;
    localStorage.setItem("shopList", JSON.stringify(shopList));
}

// 매장 삭제
const removeShop = (id) => {
    const shopList = getShopList();
    const btnshno = parseInt(id.split('delShopBtn')[1]);
    const leftShopList = shopList.filter((shop) => shop.shno !== btnshno);
    leftShopList.slice(btnshno - 1).forEach(shop => {
        shop.shno -= 1;
    })
    localStorage.setItem("shopList", JSON.stringify(leftShopList));
    getDelShopSeq();
    printShopList();
}

// 전체 재고 목록
const getStockList = () => {
    return JSON.parse(localStorage.getItem("stockList"));
}

// 선택한 재고 목록
const getSelectStockList = () => {
    const stockList = JSON.parse(localStorage.getItem("stockList"));
    return stockList.filter((stock) => stock.shno === Number($(currentShop.cells[0]).html()));
}

// 재고 번호 등록
const getNextStockSeq = () => {
    const nextStockSeq = Number(localStorage.getItem("stockSeq")) + 1;
    localStorage.setItem("stockSeq", nextStockSeq);
    return nextStockSeq;
}

// 재고 번호 감소
const getDelStockSeq = () => {
    const delStockSeq = Number(localStorage.getItem("stockSeq")) - 1;
    localStorage.setItem("stockSeq", delStockSeq);
    return delStockSeq;
}

// 재고 등록
const regidateStock = (currentShop) => {
    const stockList = getStockList();
    stockList.push(new Stock(getNextStockSeq(), $("#stname").val(), $("#stamt").val(), $("#stindate").val(), Number($(currentShop.cells[0]).html())));
    localStorage.setItem("stockList", JSON.stringify(stockList));
    printStockList();
}

// 재고 출력
const printStockList = () => {
    $("#stocktable").empty();
    let index = 0;
    getSelectStockList().forEach(stock => {
        $("#stocktable").append(`
        <tr>
            <th scope="row">${++index}</th>
            <th scope="row">${stock.stname}</th>
            <th scope="row">${stock.stamt}</th>
            <th scope="row">${stock.stindate}</th>
            <th scope="row">${getDateStr(stock.strgdate)}</th>
            <th scope="row"><button id=editStockBtn${stock.stno} class="editStockBtn">수정</button></th>
            <th scope="row"><button id=delStockBtn${stock.stno} class="delStockBtn">삭제</button></th>
        </tr>
    `);
    });

    // empty 수행 후 리스너 삭제 => 재생성
    $(".editStockBtn").on('click', (event) => {
        showEditStockAlert(event.target.closest('th').closest('tr'));
    });

    $(".delStockBtn").on('click', (event) => {
        removeStock(event.target.id);
    });
}

// 재고 입력칸 초기화
const initInputStock = () => {
    $("#stname").val('');
    $("#stamt").val('');
}

// 메모의 등록 시간 출력형식 지정함수
function getDateStr(time) {
    return moment(time).format("YYYY/MM/DD HH:mm");
}

// 재고 정보 수정 알림창
const showEditStockAlert = (event) => {
    (async () => {
        const { value: formValues } = await Swal.fire({
            title: "재고 정보 수정",
            html: `
                <input id="editstname" type="text" class="swal2-input">
                <input id="editstamt" type="number" min=0 class="swal2-input">
                <input id="editstindate" type="date" class="swal2-input">
            `,
            preConfirm: () => {
                return [
                    document.getElementById("editstname").value,
                    document.getElementById("editstamt").value,
                    document.getElementById("editstindate").value
                ];
            }
        });
        if (formValues) {
            Swal.fire(JSON.stringify(formValues));
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "재고정보가 변경되었습니다."
            });
            editStock(event, formValues);
        }
    })()
}

// 재고 수정
const editStock = (event, formValues) => {
    const trno = Number($(event.cells[0]).html());
    const stockList = getSelectStockList();
    const editStock = stockList.find((stock) => stock.stno === trno); // undefined?
    console.log(editStock);

    editStock.stname = formValues[0];
    editStock.stamt = formValues[1];
    editStock.stindate = formValues[2];
    localStorage.setItem("stockList", JSON.stringify(stockList));
    printStockList();
}

// 재고 삭제
const removeStock = (id) => {
    const btnstno = parseInt(id.split('delStockBtn')[1]);
    const leftStockList = getStockList().filter((stock) => stock.stno != btnstno);
    leftStockList.slice(btnstno - 1).forEach(stock => {
        stock.stno -= 1;
    });
    localStorage.setItem("stockList", JSON.stringify(leftStockList));
    printStockList();
    getDelStockSeq();
}

// 재고 수량 변경
const changeStockQuantity = () => {

}


$(() => {
    initLocalStorage();
    printShopList();
    printStockList();

    $("#regShopBtn").on('click', () => {
        regidateShop();
        initInputShop();
    });

    $(".delBtn").on('click', (event) => {
        removeShop(event.target.id);
    });

    $("#regStockBtn").on('click', () => {
        regidateStock();
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
    const shopList = getShopList();
    const shopListLeng = shopList.length;
    for (let i = 0; i < shopListLeng; i++) {
        $("#shoptable").append(`
        <tr>
            <th scope="row">${shopList[i].shno}</th>
            <th scope="row">${shopList[i].shname}</th>
            <th scope="row">${shopList[i].shtotst}</th>
            <th scope="row"><button id=regBtn${shopList[i].shno} class="regBtn">수정</button></th>
            <th scope="row"><button id=delBtn${shopList[i].shno} class="delBtn">삭제</button></th>
        </tr>
    `);
    }
    // empty 수행 후 리스너 삭제 => 재생성
    $(".delBtn").on('click', (event) => {
        removeShop(event.target.id);
    });
}

// 매장 입력칸 초기화
const initInputShop = () => {
    $("#shname").val('');
    $("#shtotst").val('');
}

// 매장 등록
const regidateShop = () => {
    const shopList = getShopList();
    shopList.push(new Shop(getNextShopSeq(), $("#shname").val(), $("#shtotst").val()));
    localStorage.setItem("shopList", JSON.stringify(shopList));
    printShopList();
};

// 매장 삭제
const removeShop = (id) => {
    const shopList = getShopList();
    const leftShopList = shopList.filter((shop) => shop.shno != parseInt(id.split('delBtn')[1]));
    localStorage.setItem("shopList", JSON.stringify(leftShopList));
    printShopList();
    getDelShopSeq();
}

// 재고 목록
const getStockList = () => {
    return JSON.parse(localStorage.getItem("stockList"));
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
const regidateStock = () => {
    const stockList = getStockList();
    stockList.push(new Stock(getNextStockSeq(), $("#stname").val(), $("#stamt").val(), $("#stindate").val(), 1));
    localStorage.setItem("stockList", JSON.stringify(stockList));
    printStockList();
}

// 재고 출력
const printStockList = () => {
    $("#stocktable").empty();
    const stockList = getStockList();
    const stockListLeng = stockList.length;
    for (let i = 0; i < stockListLeng; i++) {
        $("#stocktable").append(`
        <tr>
            <th scope="row">${stockList[i].stno}</th>
            <th scope="row">${stockList[i].stname}</th>
            <th scope="row">${stockList[i].stamt}</th>
            <th scope="row">${stockList[i].stindate}</th>
            <th scope="row">${getDateStr(stockList[i].strgdate)}</th>
            <th scope="row"><button id=regBtn${stockList[i].stno} class="regBtn">수정</button></th>
            <th scope="row"><button id=delBtn${stockList[i].stno} class="delBtn">삭제</button></th>
        </tr>
    `);
    }
    // empty 수행 후 리스너 삭제 => 재생성
    $(".delBtn").on('click', (event) => {
        removeStock(event.target.id);
    });
}

// 메모의 등록 시간 출력형식 지정함수
function getDateStr(time) {
    return moment(time).format("YYYY/MM/DD HH:mm");
}

// 매장 입력칸 초기화
const initInputStock = () => {
    $("#stname").val('');
    $("#stamt").val('');
}

// 재고 수정
const editStock = () => {

}

// 재고 삭제
const removeStock = (id) => {
    const stockList = getStockList();
    const leftStockList = stockList.filter((stock) => stock.stno != parseInt(id.split('delBtn')[1]));
    localStorage.setItem("stockList", JSON.stringify(leftStockList));
    printStockList();
    getDelStockSeq();
}

// 재고 수량 변경
const changeStockQuantity = () => {

}


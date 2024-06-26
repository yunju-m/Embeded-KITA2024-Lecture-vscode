$(() => {
    initLocalStorage();
    printShopList();

    $("#regShopBtn").on('click', () => {
        regidateShop();
    });

    $(".delBtn").on('click', (event) => {
        console.log("삭제클릭");
        //removeShop(event.target.id);
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
    // $(".delBtn").on('click', (event) => {
    //     console.log("삭제클릭");
    //     //removeShop(event.target.id);
    // });
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
    console.log(leftShopList);
    localStorage.setItem("shopList", JSON.stringify(leftShopList));
    printShopList();
}

// 재고 목록
const getStockList = () => {

}

// 재고 등록
const regidateStock = () => {

}

// 재고 수정
const editStock = () => {

}

// 재고 삭제
const removeStock = () => {

}

// 재고 수량 변경
const changeStockQuantity = () => {

}

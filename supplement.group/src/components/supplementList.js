import React from "react";

//тут хотел сделать свой обьект с элементами заменяющими ваши из API

// в комменатарии ниже будет функция вызова данных с сервера, но очень много времени ушло на это,
// в том числе из-за глупой ошибки (пропустил букву при обращении к обьекту SupplementsList),
// не мог найти ошибку несколько часов:)
//отказался от выполнения этой функции но времени на решение цже не осталось
//если будет возможность и желание дать обратную связь, буду рад
//все закоментировано, из-за ошибок

// class SuppList {
//     btn = document.createElement("button");
//     constructor(props){
//         this.picture = picture;
//         this.article = article;
//         this.nameSupp = nameSupp;
//         this.price = price;
//     }
// }







// let vitaminAll;
//
// function createSupp(){
//     console.log('suppEl', );
//     return vitaminAll.forEach((suppEl) => {
//         return (
//             <ul>
//                 <li>
//                     <img src={suppEl.Picture} alt=""/>
//                     <p>{suppEl.GoodsCommercialName}</p>
//                     <p>{suppEl.CommercialDescription}</p>
//                 </li>
//             </ul>
//         )
//     });
// }
//
// function createSuppElem() {
//    CreateSuppElement();
//     createSupp();
// }
//
//
//
function CreateSuppElement() {
    const VITAMIN_URL = 'https://api.vitamin.trade/SupplementsList';
    const result = fetch(VITAMIN_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'ers45bsGH^)()Hhj',
            'accept': 'application/json',
        },
    });

    let vitaminAll;
    result
        .then((response) => {
            return response.json();
        })
        .then((supplementList) => {
            const vitamin = supplementList.SupplementsList;
            console.log('vitamin', vitamin);
            vitaminAll = Object.entries(vitamin);
            // console.log('vitaminAll', vitaminAll);
            console.log("тип vitaminAll",typeof vitaminAll);

            return vitaminAll;
        })
        .catch((error) => {
            console.log('error', error);
        });
// return createSuppElem;

    return vitaminAll;
}


// console.log('vitaminAll', vitaminAll);
export default CreateSuppElement();


let urunEkleButonu = document.querySelector("#urunEklemeButonu");
let popupElm = document.querySelector("#popKapsayici");
let popupUrunOlustur = document.querySelector("#PopupUrunOlustur");
const cardsContainer = document.getElementById('cards');
const kapatİsaret = document.querySelector("#kapatIsareti");



const popUrunAdi = document.querySelector("#UrunAdi");
const popUrunFiyat = document.querySelector("#UrunFiyat");
const popUrunAciklama = document.querySelector("#UrunAciklama");




const urun =[];

const yeniUrun = {
    urunAdi: "",
    urunFiyat:0,
    urunAciklama: "",
};



/// FONKSİYONLAR. ////

function PopAc(){
    popupElm.classList.replace("hidden","block");
}

const urunSayisiKontrol=()=>{
    let urunSayisi = document.querySelector("#ÜrünSayisi");
    urunSayisi.innerHTML=urun.length;
}


function PopKapat(){
    Kaydet();
    PopTemizle();
    UrunListele();

}

function Kaydet(){
    if(yeniUrun.urunAciklama === "" || yeniUrun.urunAdi === "" || yeniUrun.urunFiyat === 0){
       
        
        return;
    }

   
    const yeniUrunKopya = {
        urunAdi: yeniUrun.urunAdi,
        urunFiyat: yeniUrun.urunFiyat,
        urunAciklama: yeniUrun.urunAciklama,
    };

    urun.push(yeniUrunKopya); 
 
    popupElm.classList.replace("block", "hidden");
}


function PopTemizle(){
    popUrunAdi.value=null;
    popUrunFiyat.value=null;
    popUrunAciklama.value=null;
}


function UrunListele(){
    cardsContainer.innerHTML = "";
    for(let i = 0; i<urun.length; i++){
        let u = urun[i];
        const yeniCard = document.createElement('div');
        yeniCard.classList.add('card');
    
        yeniCard.innerHTML = `<div class="w-64 rounded-lg overflow-hidden shadow-md bg-white ml-4 my-4">
        <p class="text-l font-semibold px-1 py-1 bg-blue-500 text-white">${u.urunAdi}</p>
        <div class="px-4 py-3">
          <h3 class="text-xl font-semibold">${u.urunFiyat} TL</h3>
          <p class="text-gray-600 mt-2">${u.urunAciklama}</p>
          <a href="#" class="text-blue-500 hover:underline mt-4 inline-block">Ürün Düzenle</a>
        </div>
      </div>
      
        `;

        
    
        cardsContainer.appendChild(yeniCard);
    
    }
    
}






////// CLİCK EVENTLER ///
urunEkleButonu.addEventListener("click",PopAc);
popupUrunOlustur.addEventListener("click",PopKapat);
kapatİsaret.addEventListener("click",()=>{
  popupElm.classList.replace("block","hidden");
});


popUrunAdi.addEventListener("keyup", (event) => {
    if(event.key === "Escape"){
        PopKapat();
        popUrunAdi.value = "";
    }
    else{
        yeniUrun.urunAdi = popUrunAdi.value;
    } 
})

popUrunFiyat.addEventListener("keyup", (event) => {
    if(event.key === "Escape"){
        PopKapat();
        popUrunFiyat.value = "";
    }
    else{
        yeniUrun.urunFiyat = popUrunFiyat.value;
    } 
})

popUrunAciklama.addEventListener("keyup", (event) => {
    if(event.key === "Escape"){
        PopKapat();
        popUrunAciklama.value = "";
    }
    else{
        yeniUrun.urunAciklama = popUrunAciklama.value;
    } 
})

setInterval(urunSayisiKontrol,1000);




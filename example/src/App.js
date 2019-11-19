import React, { Component } from 'react'

import MasspaItemCategory from 'masspa-item-category'


let data=[
  {
  code: "",
  createdAt: 1569389110373,
  currencyCode: "VND",
  description: "<p><span>Triệt Lông Toàn Thân Công Nghệ Cao Từ Hoa Kỳ DIODE LASER </span></p>",
  featured: 1,
  image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-item/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1571041584009.jpg",
  isShowPrice: 1,
  itemCode: "b1e35e5e-393e-4dc5-9069-6c4ec78e6edc",
  itemTime: 60,
  menuId: "['9cd8e6bc-001c-4126-b3c8-416afaac3fe6']",
  position: 9,
  price: 34000000,
  priceShow: 34000000,
  serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
  showOnShop: 1,
  textSearch: "triet-toan-than",
  title: "Triệt Toàn Thân",
  updatedAt: 1573114246049
  },
  {
  code: "",
  createdAt: 1569389030272,
  currencyCode: "VND",
  description: "<p><span>Triệt Lông Vùng Lưng Công Nghệ Cao Từ Hoa Kỳ DIODE LASER </span></p>",
  featured: 1,
  image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-item/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1571041758985.jpg",
  isShowPrice: 1,
  itemCode: "c02afeeb-a6a1-483f-9a52-501514338335",
  itemTime: 30,
  menuId: "['9cd8e6bc-001c-4126-b3c8-416afaac3fe6']",
  position: 8,
  price: 8000000,
  priceShow: 8000000,
  serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
  showOnShop: 1,
  textSearch: "triet-vung-lung",
  title: "Triệt Vùng Lưng",
  updatedAt: 1573114370357
  },
  {
    code: "",
    createdAt: 1569388996168,
    currencyCode: "VND",
    description: "<p><span>Triệt Lông Vùng Lưng Công Nghệ Cao Từ Ha Kỳ DIODE LASER </span></p>",
    featured: 1,
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-item/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1571039380264.jpg",
    isShowPrice: 0,
    itemCode: "ef0746a0-6d65-4444-aab0-ab78fe4f048f",
    itemTime: 30,
    menuId: "['9cd8e6bc-001c-4126-b3c8-416afaac3fe6']",
    position: 7,
    price: 8000000,
    priceShow: 8000000,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    showOnShop: 1,
    textSearch: "triet-vung-bikini",
    title: "Triệt Vùng Bikini",
    updatedAt: 1573114276266
  },
  {
    code: "",
    createdAt: 1569388952844,
    currencyCode: "VND",
    description: "<p><span>Triệt Lông Vùng Chân Công Nghệ Cao Từ Hoa Kỳ DIODE LASER </span></p>",
    featured: 1,
    image: "",
    isShowPrice: 1,
    itemCode: "1d47efe0-3011-4055-b7f2-a583c7107ff9",
    itemTime: 30,
    menuId: "['9cd8e6bc-001c-4126-b3c8-416afaac3fe6']",
    position: 6,
    price: 8000000,
    priceShow: 8000000,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    showOnShop: 1,
    textSearch: "triet-vung-chan",
    title: "Triệt Vùng Chân ",
    updatedAt: 1573114296190
  },
  {
    code: "",
    createdAt: 1569382608309,
    currencyCode: "VND",
    description: "<p><span>Ở thời đại nhà Thanh bí quyết giúp cho Hoàng Hậu giữ mãi tuổi thanh xuân duy trì làn da luôn luôn căng mịn và trắng hồng rạng rỡ. Đó là nhờ vào loại mặt nạ bào chế từ nguyên liệu chính là Tuyết giáp cùng với các loại dược liệu hiếm như Hoàng kỳ, Bạch phụ tử, Nhân sâm hảo hạng, Bạch truật, Bạch chỉ được bào chế với công thức chuẩn tỷ lệ vàng có tên là Bạch Liên Hoa và được lưu truyền đến ngày hôm nay.</span></p><p><span >*Bước 10: Thoa dưỡng da mặt và dưỡng mềm môi bơ hạt mỡ</span></p>",
    featured: 0,
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-item/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1571037973420.jpg",
    isShowPrice: 1,
    itemCode: "99258bc0-0429-48ef-8856-36f5545b1a0e",
    itemTime: 75,
    menuId: "['77340f06-f61a-4bfb-82a8-c44731ad0245']",
    position: 6,
    price: 900000,
    priceShow: 900000,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    showOnShop: 1,
    textSearch: "hap-sieu-trang-mat-bach-lien-hoa",
    title: "Hấp Siêu Trắng Mặt Bạch Liên Hoa ",
    updatedAt: 1573110318276
  },
  {
    code: "",
    createdAt: 1569384642935,
    currencyCode: "VND",
    description: "<p><span >Điều trị da nám bằng công nghệ cao triệt tận gốc nám bằng thuốc đặc trị </span></p>",
    featured: 0,
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-item/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1571040630381.jpg",
    isShowPrice: 1,
    itemCode: "ce4391dd-d7b0-4b61-886a-c7bb0251033d",
    itemTime: 120,
    menuId: "['7393451f-7553-48e4-a3d3-361df214d11c']",
    position: 6,
    price: 30000000,
    priceShow: 30000000,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    showOnShop: 1,
    textSearch: "dieu-tri-da-nam-tron-goi",
    title: "Điều Trị Da Nám (Trọn Gói)",
    updatedAt: 1573114182195
  },
  {
    code: "",
    createdAt: 1569384642935,
    currencyCode: "VND",
    description: "<p><span >Điều trị da nám bằng công nghệ cao triệt tận gốc nám bằng thuốc đặc trị </span></p>",
    featured: 0,
    image: "https://storage.googleapis.com/masspa-152306.appspot.com/myServices/0548caa0-a47b-11e9-b6ea-cd470457ddbc/menu-item/0548caa0-a47b-11e9-b6ea-cd470457ddbc_1571040630381.jpg",
    isShowPrice: 1,
    itemCode: "ce4391dd-d7b0-4b61-886a-c7bb0251034d",
    itemTime: 120,
    menuId: "['7393451f-7553-48e4-a3d3-361df214d11c']",
    position: 6,
    price: 30000000,
    priceShow: 30000000,
    serviceCode: "0548caa0-a47b-11e9-b6ea-cd470457ddbc",
    showOnShop: 1,
    textSearch: "dieu-tri-da-nam-tron-goi",
    title: "Điều Trị Da Nám (Trọn Gói)",
    updatedAt: 1573114182195
  },

]

export default class App extends Component {
  render () {
    return (
      <div>
        <MasspaItemCategory listItems={data} borderRadius="49px 49px 49px 0px"  borderImage="5px solid #ddd" sizeImage={180} mode={1}  animation="zoom" layout={1} colorTitle="red"/>
      </div>
    )
  }
}

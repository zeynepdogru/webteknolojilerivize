<template>
  <q-footer style="position: absolute; background-color: #dadada52">
    <div
      class="row q-gutter-md"
      style="
        font-size: 40px;
        width: 1150px;
        color: #696969;
        margin: 15px 0px 15px 200px;
      "
    >
      <q-icon style="margin-right: -20px" name="fa-solid fa-box" />
      <div class="col-2 q-gutter-md">
        <h6 style="color: black; font-size: 15px; margin-top: 0px">
          ÜCRETSİZ KARGO
        </h6>
        <h6
          style="
            color: grey;
            font-size: 17px;
            font-weight: 300;
            margin-top: -25px;
          "
        >
          300 TL ve Üzeri Kargolarınız Bizden
        </h6>
      </div>
      <q-icon style="margin-right: -20px" name="fa-regular fa-circle-check" />
      <div class="col-2 q-gutter-md">
        <h6 style="color: black; font-size: 15px; margin-top: 0px">
          GÜVENİLİR ALIŞVERİŞ
        </h6>
        <h6
          style="
            color: grey;
            font-size: 17px;
            font-weight: 300;
            margin-top: -25px;
          "
        >
          256 Bit SSL Sertifikasıyla Güvenilir
        </h6>
      </div>
      <q-icon style="margin-right: -20px" name="fa-solid fa-rotate-left" />
      <div class="col-2 q-gutter-md">
        <h6 style="color: black; font-size: 15px; margin-top: 0px">
          ÜCRETSİZ İADE
        </h6>
        <h6
          style="
            color: grey;
            font-size: 17px;
            font-weight: 300;
            margin-top: -25px;
          "
        >
          30 Gün İçinde Ücretsiz İade İmkânı
        </h6>
      </div>
      <q-icon style="margin-right: -20px" name="fa-solid fa-bullhorn" />
      <div class="col-2 q-gutter-md">
        <h6 style="color: black; font-size: 15px; margin-top: 0px">
          SÜRPRİZ KAMPANYALAR
        </h6>
        <h6
          style="
            color: grey;
            font-size: 17px;
            font-weight: 300;
            margin-top: -25px;
          "
        >
          Size Özel ve Uygun Kampanyalar
        </h6>
      </div>
    </div>
    <q-container>
      <div class="custom-container" style="background-color: white">
        <div class="image-container2">
          <img
            src="https://cdn.pixabay.com/photo/2021/04/17/09/24/japanese-cherry-blossom-6185333_1280.jpg"
            class="image"
          />
          <div class="text" style="width: 70%">
            <h2 class="black-text small-text">E-bülten'e kayıt olun</h2>
            <h3 class="black-text small-text">
              Size özel fırsatları kaçırmayın!
            </h3>
          </div>
        </div>
        <div class="col-right">
          <q-input
            v-model="email"
            filled
            outlined
            placeholder="E-posta adresinizi bu alana yazınız"
            class="email-input"
            ><q-btn flat color="black" label="GÖNDER" />
          </q-input>
        </div>
      </div>
    </q-container>
  </q-footer>
</template>

<style>
.custom-container {
  display: flex;
  align-items: center;
  height: 200px;
  max-width: 1200px;
  margin: 0 200px;
  border: 1px solid #000;
}

.col-right {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}

.image-container2 {
  position: relative;
  overflow: hidden;
}

.image {
  width: 300px;
  height: 190px;
  opacity: 0.4;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  z-index: 1;
}

.small-text {
  font-size: 15px;
}

.black-text {
  color: #000;
}

.email-input {
  width: 100%;
  max-width: 50vw;
  margin-top: 10px;
}
</style>

<script></script>

<template>
  <q-footer style="position: absolute; background-color: #dadada52">
    <div
      class="row q-gutter-md"
      style="font-size: 50px; color: #696969; margin: 15px 0 15px 200px"
    >
      <q-icon name="fa-solid fa-box" />
      <h6 style="color: black; font-size: 15px">Ücretsiz Kargo</h6>
      <q-icon name="fa-regular fa-circle-check" />
      <h6 style="color: black; font-size: 15px">Güvenilir Alışveriş</h6>
      <q-icon name="fa-solid fa-rotate-left" />
      <h6 style="color: black; font-size: 15px">Ücretsiz İade</h6>
      <q-icon name="fa-solid fa-bullhorn" />
      <h6 style="color: black; font-size: 15px">Sürpriz Kampanyalar</h6>
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

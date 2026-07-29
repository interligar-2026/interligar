<template>
  <section class="inclusao-texto-container">
    <div class="texto-box">
      <p>
        Nossa plataforma visa a educação para todos.<br />
        Por isso, visamos cursos que adequem aos<br />
        jovens neuro - típicos e neuro - atípicos.
      </p>
    </div>
  </section>
</template>

<style scoped>
.inclusao-texto-container {
  width: 96%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  font-family: 'M PLUS 1', sans-serif;
}

.texto-box {
  background-color: #1a74e5;
  border: 1px solid #0b2958;
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
}

.texto-box p {
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  text-align: center;
}

@media (max-width: 992px) {
  .texto-box {
    padding: 35px 20px;
  }

  .texto-box p {
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>

<template>
  <section class="sobre-texto-container">
    <div class="texto-box">
      <p>
        A InterLigar é uma plataforma de educação inovadora criada para impulsionar jovens que desejam ingressar na faculdade e se destacar no mercado de trabalho. Unimos a preparação prática, por meio de simulados focados nos exames acadêmicos, ao desenvolvimento de soft skills focamos em habilidades comportamentais essenciais para o sucesso pessoal e profissional. Mais do que ajudar a passar na prova, nós preparamos o estudante para o futuro.
      </p>
    </div>
  </section>
</template>

<style scoped>
.sobre-texto-container {
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
  padding: 40px 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.texto-box p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

@media (max-width: 992px) {
  .texto-box {
    padding: 30px 25px;
  }

  .texto-box p {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>

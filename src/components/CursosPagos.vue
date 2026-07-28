<template>
  <section class="cursos-pagos-container">
    <div class="pill-header">
      <h2>Cursos pagos</h2>
    </div>
    <div class="cursos-box">
      <p class="subtitle">
        Nosso curso Conectar, auxilia o jovem nas competências exigidas durante e após o ensino
        superior.
      </p>
      <div class="cards-grid">
        <div v-for="(curso, index) in cursos" :key="index" class="curso-card-wrapper">
          <h3 class="card-title">{{ curso.titulo }}</h3>
          <div class="curso-card">
            <p class="card-text" v-html="curso.descricao"></p>
            <span class="card-price">{{ curso.preco }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const cursos = ref([
  {
    titulo: 'Planejamento',
    descricao:
      'O aluno irá aprender a como gerenciar melhor seu tempo de acordo com sua rotina, conciliando estudos e trabalho.<br/><br/>Terá acesso a cronograma de estudo específico, de acordo com a Universidade optada.',
    preco: 'R$ 50',
  },
  {
    titulo: 'Liderança',
    descricao:
      'Acreditamos que liderança é uma habilidade a ser desenvolvida.<br/><br/>Por isso, desenvolvemos uma metodologia que dá aos alunos as ferramentas necessárias para liderarem, visto que esse é um perfil necessário para as faculdades.',
    preco: 'R$ 60',
  },
  {
    titulo: 'Oratória',
    descricao:
      'A comunicação é essencial no ambiente profissional e acadêmico.<br/><br/>Por isso, em parceria com a @escolconquer, disponibilizamos um curso de oratória personalizado, abordando comunicação verbal, não verbal e virtual.',
    preco: 'R$ 70',
  },
  {
    titulo: 'Preparatório para entrevista',
    descricao:
      'Uma das etapas mais importantes para o candidato é saber se apresentar.<br/><br/>Neste treinamento, o aluno aprenderá com recrutadores como falar sobre si de forma assertiva, além de receber dicas para montar seu portfólio pessoal.',
    preco: 'R$ 130',
  },
  {
    titulo: 'Tutoria',
    descricao:
      'Oferecemos tutoria personalizada, onde o aluno pode marcar horário de acordo com sua agenda.<br/><br/>Nossos tutores são plenamente capacitados a direcionar tanto academicamente, quanto a dúvidas relacionadas a qual faculdade escolher.',
    preco: 'R$ 80',
  },
])
</script>

<style scoped>
.cursos-pagos-container {
  width: 96%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'M PLUS 1', sans-serif;
  box-sizing: border-box;
}

.pill-header {
  background-color: #0a366f;
  border: 1px solid #0b2958;
  border-radius: 50px;
  padding: 10px 48px;
  margin-bottom: -22px;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pill-header h2 {
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.5px;
}

.cursos-box {
  background-color: #1a74e5;
  border: 1px solid #0b2958;
  border-radius: 24px;
  padding: 50px 30px 40px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.subtitle {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 30px 0;
  line-height: 1.4;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  row-gap: 35px;
}

.curso-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.curso-card-wrapper:last-child {
  grid-column: 1 / -1;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
}

.card-title {
  color: #ffffff;
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 12px 0;
  text-align: center;
}

.curso-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px 20px 20px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.card-text {
  color: #4a5568;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 20px 0;
  text-align: left;
}

.card-price {
  color: #2d3748;
  font-size: 16px;
  font-weight: 800;
  align-self: flex-start;
}

@media (max-width: 992px) {
  .pill-header {
    padding: 8px 32px;
    margin-bottom: -18px;
  }

  .pill-header h2 {
    font-size: 24px;
  }

  .cursos-box {
    padding: 40px 18px 30px 18px;
  }

  .subtitle {
    font-size: 15px;
    text-align: center;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .curso-card-wrapper:last-child {
    grid-column: auto;
    max-width: 100%;
  }

  .card-title {
    font-size: 19px;
  }
}
</style>

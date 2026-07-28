<template>
  <section class="cards-wrapper-container">
    <div class="cards-grid">
      <div v-for="(card, index) in vestibulares" :key="index" class="vestibular-card">
        <div class="card-badge">
          <span>{{ card.nome }}</span>
        </div>

        <ul class="items-list">
          <li v-for="(item, itemIndex) in card.itens" :key="itemIndex">
            <span class="item-text">{{ item }}</span>
            <div class="check-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1A74E5" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const vestibulares = ref([
  {
    nome: 'Enem',
    itens: ['Provas de anos anteriores', 'Correções gravadas', 'Lista de exercício', 'Redação'],
  },
  {
    nome: 'Unicamp',
    itens: ['Provas discursivas', 'Questões interdisciplinares', 'Simulados exclusivos', 'Redação'],
  },
  {
    nome: 'PUC-SP',
    itens: ['Simulados Completos', 'Questões Comentadas', 'Redação', 'Simulados Cronometrados'],
  },
  {
    nome: 'Fuvest',
    itens: [
      'Provas de anos anteriores',
      'Material de Apoio',
      'Simulado conhecimento geral',
      'Redação',
    ],
  },
  {
    nome: 'Mackenzie',
    itens: ['Provas de anos anteriores', 'Redação', 'Material de Apoio', 'Lista de Exercícios'],
  },
  {
    nome: 'UNESP',
    itens: ['Simulados Completos', 'Questões Discursivas', 'Revisões Temáticas', 'Gabaritos'],
  },
  {
    nome: 'UERJ',
    itens: ['Exame de Qualificação', 'Redação', 'Questões Objetivas', 'Material de Apoio'],
  },
  {
    nome: 'Links',
    itens: [
      'Provas de anos anteriores',
      'Resolução de casos',
      'Aulas de inglês',
      'Simulados Internacionais',
      'Simulados Personalizados',
      'Banco de Questões',
      'Videoaulas',
    ],
  },
])
</script>

<style scoped>
.cards-wrapper-container {
  background-color: #1a74e5;
  border-radius: 20px;
  border: 1px solid #0b2958;
  padding: 30px;
  font-family: 'M PLUS 1', sans-serif;
  width: 96%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.vestibular-card {
  background-color: #ffffff;
  border-radius: 24px;
  padding: 35px 25px 20px 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.card-badge {
  background-color: #0d82ee;
  border-radius: 50px;
  padding: 8px 0;
  width: 60%;
  max-width: 260px;
  text-align: center;
  position: absolute;
  top: 15px;
}

.card-badge span {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'M PLUS 1', sans-serif;
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 35px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.items-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 10px;
}

.item-text {
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 700;
  font-family: 'M PLUS 1', sans-serif;
}

.check-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.check-icon svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  .cards-wrapper-container {
    padding: 20px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card-badge {
    width: 70%;
  }

  .card-badge span {
    font-size: 18px;
  }

  .item-text {
    font-size: 14px;
  }
}
</style>

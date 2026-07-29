<template>
  <section class="inclusao-cards-wrapper">
    <div class="cards-grid">
      <div
        v-for="(card, index) in secoesInclusao"
        :key="index"
        class="inclusao-card"
      >
        <div class="card-badge">
          <span>{{ card.titulo }}</span>
        </div>
        <ul class="items-list">
          <li v-for="(item, itemIndex) in card.itens" :key="itemIndex">
            <span class="item-text">{{ item }}</span>
            <div class="check-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#1A74E5"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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

const secoesInclusao = ref([
  {
    titulo: 'Conteúdo',
    itens: [
      'Conteúdo objetivo e claro',
      'Materiais didáticos que atendem as necessidades para o desenvolvimento de cada indivíduo'
    ]
  },
  {
    titulo: 'Comunidade e acessibilidade',
    itens: [
      'Página com opção de áudio',
      'Chat para auxiliar o aluno em tempo real',
      'Encontros virtuais uma vez por mês',
      'Troca de experiências'
    ]
  },
  {
    titulo: 'Acadêmico',
    itens: [
      'Biblioteca com acervos diversos, inclusive livros sobre transtornos, inclusão entre outros.'
    ]
  }
])
</script>

<style scoped>
.inclusao-cards-wrapper {
  background-color: #1a74e5;
  border-radius: 20px;
  border: 1px solid #0b2958;
  padding: 40px 30px;
  font-family: 'M PLUS 1', sans-serif;
  width: 96%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.inclusao-card {
  background-color: #ffffff;
  border-radius: 24px;
  padding: 35px 25px 25px 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.card-badge {
  background-color: #0d82ee;
  border-radius: 50px;
  padding: 8px 16px;
  width: 75%;
  max-width: 280px;
  text-align: center;
  position: absolute;
  top: 20px;
}

.card-badge span {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: 'M PLUS 1', sans-serif;
  white-space: nowrap;
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 35px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.items-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
}

.item-text {
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
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

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .card-badge {
    width: 80%;
  }

  .card-badge span {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .inclusao-cards-wrapper {
    padding: 30px 15px;
  }

  .inclusao-card {
    padding: 30px 15px 20px 15px;
  }

  .item-text {
    font-size: 14px;
  }
}
</style>

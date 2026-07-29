<template>
  <section class="inclusao-hero-banner">
    <div class="banner-content">
      <div class="text-group">
        <div class="pill-title">
          <span>InterLiga</span>
        </div>
        <h1 class="main-title">Inclusão</h1>
      </div>
      <div class="mascot-group">
        <img src="@/assets/MerlinJoinha.png" alt="Mascote Merlin Joinha" class="merlin-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.inclusao-hero-banner {
  background-color: #1a74e5;
  border-radius: 20px;
  border: 1px solid #0b2958;
  padding: 40px 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'M PLUS 1', sans-serif;
  margin: 0 auto 30px auto;
  box-sizing: border-box;
  max-width: 1400px;
  width: 96%;
  height: 400px;
}

.banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  z-index: 2;
}

.pill-title {
  background-color: #0a366f;
  padding: 6px 28px;
  border-radius: 50px;
  display: inline-block;
}

.pill-title span {
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.main-title {
  color: #ffffff;
  font-size: 52px;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.mascot-group {
  position: relative;
  flex-shrink: 0;
  height: 200px;
  display: flex;
  align-items: flex-end;
}

.merlin-img {
  width: 500px;
  height: auto;
  object-fit: contain;
  display: block;
  z-index: 1;
  position: relative;
  bottom: -190px;
  right: -50px;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
}

@media (max-width: 992px) {
  .inclusao-hero-banner {
    padding: 30px 20px;
    height: auto;
  }

  .banner-content {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }

  .text-group {
    align-items: center;
  }

  .pill-title {
    padding: 6px 22px;
  }

  .pill-title span {
    font-size: 22px;
  }

  .main-title {
    font-size: 40px;
  }

  .mascot-group {
    width: 100%;
    height: 220px;
    justify-content: center;
  }

  .merlin-img {
    width: 280px;
    position: relative;
    bottom: -30px;
    right: 0;
  }
}
</style>

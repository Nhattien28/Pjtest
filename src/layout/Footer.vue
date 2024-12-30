<script setup></script>

<template>
  <div class="footer-bar">
    <div class="footer container">
      <div class="footer-socicals">
        <a href="#!">
          <i class="fa-brands fa-pinterest"></i>
        </a>
        <a href="#!">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#!">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#!">
          <i class="fa-brands fa-facebook"></i>
        </a>
      </div>
      <span class="footer-desc">All Rights Reserved</span>
    </div>
  </div>
</template>

<style scoped>
.footer-bar {
  background: var(--White);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.footer-desc {
  font-size: 1.4rem;
  font-weight: 400;
  color: #9b9b9b;
}
.footer-socicals a {
  margin: 10px;
  text-align: center;
  
}

@media (max-width: 768px) {
  .footer {
    height: auto;
    justify-content: space-between;
  }
  .footer-logo {
    width: 50px;
    height: 50px;
  }
  .footer-socicals a {
    margin: 3px;
  }
  .footer-desc {
    font-size: 1rem;
  }
}
</style>

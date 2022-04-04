<template>
  <section class="login-wrap">
    <div class="fixed-filter-model"></div>
  </section>
</template>
<script lang="ts"></script>
<style lang="scss" scoped>
@property --perA {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 75%;
}

@property --perB {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 99%;
}

@property --perC {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 15%;
}

@property --perD {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 16%;
}

@property --perE {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 86%;
}

@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
@keyframes move {
  100% {
    --perA: 85%;
    --perB: 49%;
    --perC: 45%;
    --perD: 39%;
    --perE: 70%;
    --angle: 360deg;
  }
}
.fixed-filter-model {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: move 30s infinite alternate linear;
  background-image: radial-gradient(
      circle at var(--perE) 7%,
      rgba(#7824fe, 0.2) 0%,
      rgba(#7824fe, 0.2) 50%,
      rgba(#4248ff, 0.5) 50%,
      rgba(#4248ff, 0.5) 100%
    ),
    radial-gradient(
      circle at var(--perC) var(--perD),
      rgba(#fdaccc, 0.2) 0%,
      rgba(#fdaccc, 0.2) 50%,
      rgba(#8361ff, 0.2) 50%,
      rgba(#8361ff, 0.04) 100%
    ),
    radial-gradient(
      circle at var(--perA) var(--perB),
      rgba(#671dff, 0.2) 0%,
      rgba(#671dff, 0.04) 50%,
      rgba(#8e2bff, 0.2) 50%,
      rgba(#8e2bff, 0.04) 100%
    );
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(130px);
    z-index: 0;
  }
}
</style>

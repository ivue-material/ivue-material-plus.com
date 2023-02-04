<template>
  <div class="tooltip-wrapper">
    <div>
      <ivue-tooltip
        class="tooltip"
        content="Top Left text"
        placement="top-start"
      >
        <ivue-button>Top Left</ivue-button>
      </ivue-tooltip>

      <ivue-tooltip class="tooltip" content="Top Center text" placement="top">
        <ivue-button>Top Center</ivue-button>
      </ivue-tooltip>

      <ivue-tooltip
        class="tooltip"
        content="Top Right text"
        placement="top-end"
      >
        <ivue-button>Top Right</ivue-button>
      </ivue-tooltip>
    </div>

    <div class="tooltip-flex">
      <div class="tooltip-left">
        <ivue-tooltip
          class="tooltip"
          content="Left Right text"
          placement="left-start"
        >
          <ivue-button>Left Top</ivue-button>
        </ivue-tooltip>

        <ivue-tooltip
          class="tooltip"
          content="Left Center text"
          placement="left"
        >
          <ivue-button>Left Center</ivue-button>
        </ivue-tooltip>

        <ivue-tooltip
          class="tooltip"
          content="Left Bottom text"
          placement="left-end"
        >
          <ivue-button>Left Bottom</ivue-button>
        </ivue-tooltip>
      </div>

      <div class="tooltip-left">
        <ivue-tooltip
          class="tooltip"
          content="Right Top text"
          placement="right-start"
        >
          <ivue-button>Right Top</ivue-button>
        </ivue-tooltip>

        <ivue-tooltip
          class="tooltip"
          content="Right Center text"
          placement="right"
        >
          <ivue-button>Right Center</ivue-button>
        </ivue-tooltip>

        <ivue-tooltip
          class="tooltip"
          content="Right Bottom text"
          placement="right-end"
        >
          <ivue-button>Right Bottom</ivue-button>
        </ivue-tooltip>
      </div>
    </div>

    <div>
      <ivue-tooltip
        class="tooltip"
        content="Bottom Left text"
        placement="bottom-start"
      >
        <ivue-button>Bottom Left</ivue-button>
      </ivue-tooltip>

      <ivue-tooltip
        class="tooltip"
        content="Bottom Center text"
        placement="bottom"
      >
        <ivue-button>Bottom Center</ivue-button>
      </ivue-tooltip>

      <ivue-tooltip
        class="tooltip"
        content="Bottom Right text"
        placement="bottom-end"
      >
        <ivue-button>Bottom Right</ivue-button>
      </ivue-tooltip>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.tooltip-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: auto;
}

.tooltip {
  margin: 10px;
}

.tooltip-left {
  display: flex;
  flex-direction: column;
}

.tooltip-flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>

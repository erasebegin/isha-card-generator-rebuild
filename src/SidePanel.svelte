<script lang="ts">
  export const currentImage: number = 1;
  export let setCurrentImage: (newCurrentNumber: number) => void;
  export let currentLang = "en";

  // set the total number of greetings card images in the selection panel
  const numImages = 12;

  let thumbnailPaths: { index: number; path: string }[] = [];

  for (let i = 1; i <= numImages; i++) {
    thumbnailPaths.push({ index: i, path: `card_${currentLang}_${i}` });
  }
</script>

<div class="side-panel">
  <div class="thumbnails">
    {#each thumbnailPaths as img}
      <button on:click={() => setCurrentImage(img.index)}>
        <img src={`/thumbnails/${img.path}.png`} alt="card thumbnail" />
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .side-panel {
    display: flex;
    flex-direction: column;
    max-width: 450px;

    .thumbnails {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      button {
        padding: 0;
        border: none;
        background: none;
        border-radius: 0.5rem;
        overflow: hidden;
        height: 75px;
        width: 75px;
        cursor: pointer;

        img {
          max-width: 75px;
        }
      }
    }
  }
</style>

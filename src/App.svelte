<script lang="ts">
  import { onMount } from "svelte";
  import { fabric } from "fabric";
  import EditableText from "./EditableText.svelte";
  import SidePanel from "./SidePanel.svelte";

  let canvas: fabric.Canvas;
  let text;
  let text2;

  const canvasWidth = 500;
  const canvasHeight = 500;
  let currentLang = "en";
  let currentImage = 1;
  let image: HTMLImageElement | null = null;
  $: src = `img/card_${currentLang}_${currentImage}.png`;

  const txtOptAll = () => ({
    txt1: {
      left: 10,
      top: 60,
      width: 300,
      fill: "blue",
      fontSize: 16,
      fontWeight: 500,
      fontFamily: "Montserrat",
      textAlign: "center",
      lineHeight: 1,
    },

    txt2: {
      left: 10,
      top: 195,
      width: 300,
      fill: "blue",
      fontSize: 16,
      fontWeight: 700,
      fontFamily: "Montserrat",
      textAlign: "center",
      lineHeight: 1,
    },
  });

  let img: HTMLImageElement;



  function setCurrentImage(newCurrentImage: number) {
    currentImage = newCurrentImage;
  }
  
  console.log({ currentImage, currentLang });
  
  onMount(() => {
    let canv = new fabric.Canvas(canvas);
    text = new fabric.Textbox("hi", txtOptAll().txt1);
    text2 = new fabric.Textbox("ho", txtOptAll().txt2);
    
    canv.setWidth(canvasWidth)
    canv.add(text);
    canv.add(text2);

    img = document.createElement("img");
    img.onload = () => {
      image = img;
      canv.setBackgroundImage(img.src, canv.renderAll.bind(canv), {
      scaleX: canv.width / img.width,
      scaleY: canv.height / img.height
    });
    };
  });

  $: {
    if (img) {
      img.src = src;
    }
  }
</script>

<main>
  <div class="canvas">
    <canvas bind:this={canvas} width="500" height="500" />
    <!-- <button>Download Image</button> -->
  </div>
  <SidePanel {setCurrentImage} {currentImage} />
</main>

<style lang="scss">
  main {
    height: 100dvh;
    background-color: #f7f1e3;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 5rem 2rem;
    font-family: "Fedra", sans-serif;
    font-weight: 400;

    .canvas {
      width: 500px;
      height: 500px;

      div {
        width: 500px;
        height: 500px;
      }
    }
  }
</style>

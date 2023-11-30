<script lang="ts">
  import { Layer, Text } from "svelte-konva";

  export let text = "";
  export let startX = 0;
  export let startY = 0;
  export let color = "blue";

  let isEditing = false;

  function startEditing() {
    isEditing = true;
  }

  function stopEditing(event: Event) {
    text = (event.target as HTMLInputElement).value;
    isEditing = false;
  }
</script>

<Layer>
  {#if !isEditing}
    <Text
      config={{
        x: startX,
        y: startY,
        text,
        fontSize: 30,
        fontFamily: "Fedra",
        fill: color,
        draggable: true,
      }}
      on:click={startEditing}
    />
  {/if}
  {#if isEditing}
    <input
      type="text"
      value={text}
      style="position: absolute; left: 20px; top: 15px;"
      on:blur={stopEditing}
    />
  {/if}
</Layer>

<!--Below is a textarea, the interface indicates to the user that they should type up their problem. It has the look of a texting interface where things they type show up on the left and responses from an agent appear on the left -->


<script type="ts">
    import Chatlog from "./Chatlog.svelte";
    let dialogue : string[] = ["Hey! I'm a automated assistant whose sole purpose is to make your life easier! Just describe your problem and I'll do my best to help you. Once we both figure out the best way to help you, I will keep you accountable by sending you reminders to keep to the plan we figure out!", "How can you help me?", "Just start by telling me about your problem! 😜"];

    let latest_entry : string = "";

    function add_to_dialogue() {
        dialogue.push(latest_entry);
        dialogue = dialogue;
        latest_entry = "";
    }

</script>

<Chatlog dialogue={dialogue}> </Chatlog>

<!-- Below here we have a new text area where the user can describe the problems going on in their life. Hitting enter will submit these problems into the dialogue. -->

<!-- The text area will submit when the enter button is hit -->
<textarea class="imessage" bind:value={latest_entry}/>
<button on:click={add_to_dialogue}>Submit</button>


<style>

.imessage {
  background-color: #fff;
  border: 1px solid #e5e5ea;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  font-family: "SanFrancisco";
  font-size: 1.25rem;
  margin: 0 auto 1rem;
  max-width: 600px;
  padding: 0.5rem 1.5rem;
  width: 90%;
  resize: none;
}


@media screen and (max-width: 800px) {

  .imessage {
    font-size: 1.05rem;
    margin: 0 auto 1rem;
    max-width: 600px;
    padding: 0.25rem 0.875rem;
  }

}

</style>

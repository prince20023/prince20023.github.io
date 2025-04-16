let cutenessLevels = {
  maxwell: 9,
  tenley: 6,
  mona: 5
};
totalcuteness= cutenessLevels.maxwell + cutenessLevels.tenley + cutenessLevels.mona
let form = document.getElementsByClassName("form1")[0];
form.outerHTML = ` <div class="cat-form">
  <h4>Vote for Your Favorite Cat</h4>
  <form id="favorite-cat-form">
    <div class="form-group">
      <label for="user-name">Your Name:</label>
      <input type="text" id="user-name" name="user-name" required>
    </div>
    <div class="form-group">
      <label for="favorite-cat">Favorite Cat:</label>
      <select id="favorite-cat" name="favorite-cat" required>
        <option value="">-- Select a Cat --</option>
        <option value="maxwell">Maxwell</option>
        <option value="tenley">Tenley</option>
        <option value="mona">Mona</option>
      </select>
    </div>
    <div class="form-group">
      <button type="submit" id="submit-button">Submit Vote</button>
    </div>
  </form>
</div>
<div class="poll-results" id="poll-results">
  <h4>Current Cuteness Levels</h4>
  <div class="poll-label">
    <span>Maxwell</span>
    <span>${cutenessLevels.maxwell}</span>
  </div>
  <div class="poll-bar">
    <div class="poll-progress maxwell-bar" style="width: ${cutenessLevels.maxwell/totalcuteness * 100}%"></div>
  </div>
  <div class="poll-label">
    <span>Tenley</span>
    <span>${cutenessLevels.tenley}</span>
  </div>
  <div class="poll-bar">
    <div class="poll-progress tenley-bar" style="width: ${cutenessLevels.tenley/totalcuteness * 100}%"></div>
  </div>
  <div class="poll-label">
    <span>Mona</span>
    <span>${cutenessLevels.mona}</span>
  </div>
  <div class="poll-bar">
    <div class="poll-progress mona-bar" style="width: ${cutenessLevels.mona/totalcuteness * 100}%"></div>
  </div>
</div>`;

let button = document.getElementById("submit-button");
let fvcat = document.getElementById("favorite-cat");

function handleVote() {
  let selectedcat = fvcat.value;
  if (selectedcat === "maxwell") {
    cutenessLevels.maxwell++;
  } else if (selectedcat === "tenley") {
    cutenessLevels.tenley++;
  } else if (selectedcat === "mona") {
    cutenessLevels.mona++;
  }
}

function updatePoll() {
  document.querySelector(".maxwell-bar").style.width = `${cutenessLevels.maxwell/totalcuteness * 100}%`;
  document.querySelector(".tenley-bar").style.width = `${cutenessLevels.tenley/totalcuteness * 100}%`;
  document.querySelector(".mona-bar").style.width = `${cutenessLevels.mona/totalcuteness * 100}%`;

  document.querySelectorAll(".poll-label span:nth-child(2)")[0].textContent = `${cutenessLevels.maxwell}`;
  document.querySelectorAll(".poll-label span:nth-child(2)")[1].textContent = `${cutenessLevels.tenley}`;
  document.querySelectorAll(".poll-label span:nth-child(2)")[2].textContent = `${cutenessLevels.mona}`;
}

button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  handleVote();           // Update cat score
  updatePoll();           // Reflect it in UI
});

updatePoll(); // Initial call to set up the poll display
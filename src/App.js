function App() {
  return (
    <div class="container">
      <div class="outerRing">
        <div class="timer">
          <div id="time">
            <span id="minutes">00</span>
            <span id="colon">:</span>
            <span id="seconds">25</span>
          </div>
          <div id="stsp">START</div>
          <span id="setting"><i class="fas fa-cog"></i></span>
        </div>
      </div>
    </div>
  );
}

export default App;

// podatoci za sekoja karakteristika vo modalot, vklucuvajki opis, sovet, predupreduvanje i slika
const featureData = {
  spectrogram: {
    title: "Spectrogram Analysis",
    description: "Спектрограмската анализа ви овозможува да ги визуелизирате аудио фреквенциите, што го олеснува забележувањето на бучавата или артефактите во вашите песни.",
    tip: "💡 Спектрограмскиот приказ на аудио песна обезбедува визуелна индикација за тоа како енергијата во различни фреквенциски опсези се менува со текот на времето.",
    image: "images/spectrogram.png" 
  },
  "noise-reduction": {
    title: "Noise Reduction",
    description: "Намалувањето на шумот може да ги намали постојаните звуци во заднина како што се потпевнување, свирче, зуење и „шушкање“.",
    tip: "💡 Користете ја функцијата Noise Profile за да анализирате дел од шумот и потоа да примените намалување на шумот врз основа на тој профил.",
    image: "images/noise_reduction.png" 
  },
  "multi-track": {
    title: "Multi-Track Editing",
    description: "Audacity е multi-track уредувач кој ќе ви овозможи да креирате и управувате со многу различни звуци или изведби и да ги репродуцирате во исто време.",
    tip: "💡 Можете лесно да управувате со повеќе записи со прилагодување на нивната јачина и панирање во лентата со алатки на Mixer.",
    image: "images/multi_track.png" 
  },
  "audio-effects": {
    title: "Audio Effects",
    description: "Audacity нуди широк опсег на ефекти.",
    tip: "💡 Ефекти во реално време: некои надворешни ефекти сега може да се манипулираат во реално време на која било песна користејќи го стекот на ефекти.",
    advice: "📘 Кога применувате Effect или Generator на временски истегнат клип, изменетата брзина на клипот автоматски ќе биде рендерирана.",
    image: "images/audio_effects.png" 
  },
  "envelope-tool": {
    title: "Envelope Tool",
    description: "Алатката Envelope ви овозможува да ги контролирате нивоата на јачина на звук на аудио песна со текот на времето.",
    tip: "💡 Алатката Envelope ви овозможува прецизно да ја прилагодите јачината на звукот на одредени делови од вашето аудио.",
    advice: "📘 Алатката Envelope не е достапна додека е Audacity во пауза. Ако сакате да користите ефекти како EQ или филтри на траки со пликови, прво користете **Mix and Render**.",
    image: "images/envelope_tool.png" 
  },
  "crossfade": {
    title: "Crossfade",
    description: "Вкрстувањето создава непречена транзиција помеѓу два преклопувачки аудио секции.",
    tip: "💡 Crossfade најдобро функционира кога се применува на преклопувачки аудио клипови.",
    image: "images/crossfade.png" 
  },
  "auto-ducking": {
    title: "Auto-Duck",
    description: "Auto-Duck ја намалува јачината на звукот на една или повеќе песни кога одредена „контролна“ песна достигнува одреден праг.",
    tip: "💡 Подесете го прагот на контролата внимателно за да го постигнете саканиот баланс помеѓу позадинскиот звук и активната трака.",
    image: "images/auto_ducking.png" 
  },
  "pitch-shifting": {
    title: "Pitch Shifting",
    description: "Користете Pitch Shifting за да го промените тонот без да го менувате темпото.",
    tip: "💡 За да го промените и тонот и темпото истовремено, користете Effect > Change Speed and Pitch.",
    alert: "⚠️ Доколку се користи по претходна примена на Envelope Tool и звукот се враќа во неговата оригинална состојба со целосна јачина пред примената на ефектот.",
    image: "images/pitch_shiting.png" 
  },
  "audio-compression": {
    title: "Compressor",
    description: "Компресорот го намалува динамичкиот опсег на вашиот звук, спречувајќи изобличување со држење на нивото на јачина под контрола.",
    tip: "💡 Користете компресија внимателно за да избегнете претерување што може да доведе до изобличување или премногу затворен звук.",
    advice: "📘 Кога применувате ефект на временски истегната трака, брзината на траката ќе биде автоматски рендерирана.",
    image: "images/audio_compression.png" 
  },
  "time-stretching": {
    title: "Time Stretch",
    description: "Time Stretch ви овозможува да ја прилагодите должината на вашето аудио без да влијаете на неговиот тон.",
    tip: "💡 Истегнувањето на времето ви овозможува да го прилагодите темпото на вашиот проект без да го менувате тонот.",
    image: "images/time_stretch.png" 
  }
};

// elementi na modal
const modal = document.getElementById("feature-modal");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const featureTip = document.getElementById("feature-tip");
const featureAdvice = document.getElementById("feature-advice");
const featureAlert = document.getElementById("feature-alert");

// event listener za Дознајте повеќе
const learnMoreButtons = document.querySelectorAll(".learn-more");

learnMoreButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const featureKey = e.target.getAttribute("data-feature");
    showModal(featureKey);
  });
});

function showModal(featureKey) {
  const feature = featureData[featureKey];

  modalTitle.textContent = feature.title;
  modalDescription.textContent = feature.description;

  modalImage.src = feature.image || './images/placeholder.jpg';
  modalImage.alt = feature.title || "Feature image";

  featureTip.innerHTML = feature.tip || '';
  featureAdvice.innerHTML = feature.advice || '';
  featureAlert.innerHTML = feature.alert || '';

  modal.classList.remove("hidden");
}

// funkcija even-listener koja se aktivira pri zatvoranje na modalot
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden"); // krienje na modalot
});

// modalot ke se iskluci dokolku korisnikot klikne nadvor od modalnata sodrzina
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

modalImage.onerror = () => {
  modalImage.src = './images/placeholder.jpg';
};


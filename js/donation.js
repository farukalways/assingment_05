
function getInputFieldValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue
}


//Donate for Flood at Noakhali, Bangladesh section start
document.getElementById('btn-donate-noakhali')
  .addEventListener('click', function () {

    const accountBlance = parseFloat(document.getElementById('main_balance').innerText);
    const noakhaliDonate = getInputFieldValueById('input-donate-noakhali');
    const donateNoakhali = getTextFieldValueById('donate_noakhali');

    if (0 < noakhaliDonate) {
      const newBalance = accountBlance - noakhaliDonate;
      document.getElementById('main_balance').innerText = newBalance;
      const donateNewBalance = noakhaliDonate + donateNoakhali;
      document.getElementById('donate_noakhali').innerText = donateNewBalance;

      document.getElementById('input-donate-noakhali').value = '';

      // Show the success modal
      document.getElementById('my_modal_5').showModal();

      const historyContant = document.getElementById('history_contant');
      const p = document.createElement('p');

      const currentTime = new Date().toLocaleString();


      // Add the donation amount and the time to the history
      p.innerText = ` ${noakhaliDonate} Taka is Donated for Flood at Noakhali, Bangladesh; at ${currentTime}`;
      historyContant.appendChild(p);


    } else {
      alert('Invalid donate amount')
    }
  })

//Donate for Flood Relief in Feni,Bangladesh section start
document.getElementById('btn_donate_feni')
  .addEventListener('click', function () {

    const accountBlance = parseFloat(document.getElementById('main_balance').innerText);
    const feniDonate = getInputFieldValueById('input_donate_feni');
    const donatefeni = getTextFieldValueById('donate_feni');

    if (0 < feniDonate) {
      const newBalance = accountBlance - feniDonate
      document.getElementById('main_balance').innerText = newBalance
      const donateNewBalance = donatefeni + feniDonate;
      document.getElementById('donate_feni').innerText = donateNewBalance;

      document.getElementById('input_donate_feni').value = '';

      // Show the success modal
      document.getElementById('my_modal_5').showModal();

      const historyContant = document.getElementById('history_contant');
      const p = document.createElement('p');

      const currentTime = new Date().toLocaleString();

      // Add the donation amount and the time to the history
      p.innerText = ` ${feniDonate} Taka is Donated for Flood at Feni, Bangladesh; at ${currentTime}`;
      historyContant.appendChild(p);

    } else {
      alert('Invalid donate amount')
    }
  })

//Aid for Injured in the Quota Movement section start
document.getElementById('btn_quota_movement')
  .addEventListener('click', function () {
    const accountBlance = parseFloat(document.getElementById('main_balance').innerText);
    const quotaMovement = getInputFieldValueById('input_quota_movement');
    const donateQuotaBalance = getTextFieldValueById('quota_movement');

    if (0 < quotaMovement) {
      const newBalance = accountBlance - quotaMovement
      document.getElementById('main_balance').innerText = newBalance
      const donateQuota = donateQuotaBalance + quotaMovement;
      document.getElementById('quota_movement').innerText = donateQuota;
      document.getElementById('input_quota_movement').value = '';
       // Show the success modal
       document.getElementById('my_modal_5').showModal();

      const historyContant = document.getElementById('history_contant');
      const p = document.createElement('p')


      const currentTime = new Date().toLocaleString();

      // Add the donation amount and the time to the history
      p.innerText = ` ${quotaMovement} Taka is Donated for Quota Movement, Bangladesh; at ${currentTime}`;
      historyContant.appendChild(p);

    } else {
      alert('Invalid donate amount')
    }

  })


// history button function
const historyTab = document.getElementById('history_btn');
const assetsBtn = document.getElementById('assets_btn');
const historyContant = document.getElementById('history_contant')

historyTab.addEventListener('click', function () {
  historyTab.classList.add('bg-[#B4F461]');

  assetsBtn.classList.remove('bg-[#B4F461]');

  // main section hidden click in history button

  document.getElementById('main_container')
    .classList.add('hidden');

  document.getElementById('history_contant')
    .classList.remove('hidden');

});

assetsBtn.addEventListener('click', function () {
  assetsBtn.classList.add('bg-[#B4F461]');
  historyTab.classList.remove('bg-[#B4F461]');

  document.getElementById('main_container')
    .classList.remove('hidden');
  document.getElementById('history_contant')
    .classList.add('hidden');
})


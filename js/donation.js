document.getElementById('btn-donate-noakhali')
  .addEventListener('click', function () {

    const accountBlance = parseFloat(document.getElementById('main_balance').innerText);

    const noakhaliDonate = getInputFieldValueById('input-donate-noakhali');

    const donateNoakhali = getTextFieldValueById('donate_noakhali');

    if (0 < noakhaliDonate) {
      const newBalance = accountBlance - noakhaliDonate;
      document.getElementById('main_balance').innerText = newBalance;
      const donateNewBalance = noakhaliDonate + donateNoakhali;
      document.getElementById('donate_noakhali').innerText = donateNewBalance
    } else {
      alert('tui valo na')
    }
  })

document.getElementById('btn_donate_feni')
  .addEventListener('click', function () {

    const accountBlance = parseFloat(document.getElementById('main_balance').innerText);
    const feniDonate = getInputFieldValueById('input_donate_feni');
    const donatefeni = getTextFieldValueById('donate_feni')
    if (0 < feniDonate) {
      const newBalance = accountBlance - feniDonate
      document.getElementById('main_balance').innerText = newBalance
      const donateNewBalance = donatefeni + feniDonate;
      document.getElementById('donate_feni').innerText = donateNewBalance
    } else {
      alert('hobana dada')
    }
  })

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

    }else{
      alert('hoba na dada')
    }

  })
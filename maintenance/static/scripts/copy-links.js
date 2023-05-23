function copyPhone() {
  navigator.clipboard.writeText('501-500-5393');
  document.getElementById('phone-link').children[1].innerText = 'Copied!';
  setTimeout(() => {
    document.getElementById('phone-link').children[1].innerText = '(501) 500-5393';
  }, 2000);
}

function copyEmail() {
  navigator.clipboard.writeText('support@lexamica.com');
  document.getElementById('email-link').children[1].innerText = 'Copied!';
  setTimeout(() => {
    document.getElementById('email-link').children[1].innerText = 'support@lexamica.com';
  }, 2000);
}
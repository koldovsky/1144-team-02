document.getElementById('joinTeamBtn').addEventListener('click', 
function() {
    document.getElementById('surveyModal').style.display = 'block';
  } );
  
  function submitForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var workingPosition = document.getElementById('workingPosition').value;
    alert('Thank you, ' + name + '! We will contact you at ' + email + ' or ' + phone + ' shortly.');
    closeModal();
    return false;
  }
  function closeModal() {
    document.getElementById('surveyModal').style.display = 'none';
  }
  
 
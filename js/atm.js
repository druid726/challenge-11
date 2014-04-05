$(function(){

  //start coding here...
  var balance				=	0.0,
  		amountInput		=	$('#amount'),//place dollar amount
  		submitBtn			= $('#submit'),//obviously the submit button
  		atmForm				=	$('#atm'),//the name of the form
  		choiceSelect	= $('#choice'),//choose either deposit or withdrawal
  		balanceArea		= $('#balance');//where the balance is shown on screen

  		function do_transaction(action) {
  			var amount = parseFloat(amountInput.val());


  			if (isNaN(amount) || amountInput==='') {
  				balanceArea.text('Dude, seriously');
  			}
  			else {
  				if(action === 'deposit') {
  					balance += amount;
  				}
  				else if (action ==='withdrawal') {
  					balance -= amount;
  				}
  				balanceArea.text('balance: $'+balance);
  			}
  		}

  		atmForm.submit(function(){
  			var choice = choiceSelect.val();

  			if (choice === 'deposit') {
  				do_transaction(choice);
  			}
  			else if (choice === 'withdrawal') {
  				do_transaction(choice);
  			}
  			return false;
  	});

 });

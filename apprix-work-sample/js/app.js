var myApp = angular.module("MyApp",['ngDragDrop']);

myApp.controller("AppCtrl", function($scope, $window) {
	
	$scope.infoHeader="Lorem ipsum dolor sit amet, consectetur";
	$scope.infoHeader2="In molestie ipsum commodo ate. ";
	$scope.infoHelp=`Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas Phasellus viverra, est vel pulvinar semper, nulla nulla laoreet orci, a dictum neque magna et erat.`;
	$scope.infoGrphHeader="Lorem";
	$scope.infoGrphBox=`Ipsum \n- dolor sit \n- amet, consectetur`;
	$scope.infoGrphBox2=`Nunc mattis \n- diam eu erat \nipsum non \nlaoreet orci \nipsum non`;
	$scope.infoGrphHeader2="ipsum";
	$scope.infoGrphBox3="bibendum rutrum \nimpsum";
	$scope.infoGrphBox4="Lorem Ipsum";
	$scope.infoGrphBox5="Rutrum congue";
	$scope.secondHelp=`bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas Phasellus viverra, `;
	$scope.secondHelp2=`Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas.`;
	$scope.quizContent1=`Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere pellentesque orci, id rhoncus magna aliquet at. Integer laoreet, ante a blandit posuere, metus ipsum venenatis nisi, vel lacinia dolor est in tellus. Cras posuere eget mauris sit amet cursus.`;
												
	$scope.quizContents  = [		
		{"header": "Lorem ipsum 1",  "content": [
      {"first":`Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris  `}      
      ]},

	  {"header": "Lorem ipsum 2",  "content": [
      {"first":`Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel`},
      {"second":`• Nunc augue massa, tincidunt													 
				• tincidunt malesuada non 
				• id massa cursus viverra
				• bibendum rutrum congue`},
		{"third":`	Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere pellentesque orci, id rhoncus magna aliquet at.`},												
      ]},
	  {"header": "Lorem ipsum 3" ,  "content": [
      {"first":`Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere pellentesque orci, id rhoncus magna aliquet at. Integer laoreet, ante a blandit posuere, metus ipsum venenatis nisi, vel lacinia dolor est in tellus.`}      
      ]},
	  {"header": "Lorem ipsum 4",  "content": [
      {"first":`Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere pellentesque orci, id rhoncus magna aliquet at. Integer laoreet, ante a blandit posuere, metus ipsum venenatis nisi, vel lacinia dolor est in tellus.`}      
      ]}
	]
	
	$scope.questions = [		
		// First set of questions

		{"question": `Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},

	  // Second set of questions

		{"question": `Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},

	  //Third set of questions     

	  	  {"question": `Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},

	  //Fourth set of questions

	  	 {"question": `Nunc magna nisl, bibendum rutrum congue sit amet, varius et leo. Suspendisse sagittis ullamcorper pharetra. Maecenas posuere.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	  {"question": `Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia.`,  "answers": [
      {"true":"Correct! Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum.", "correct": true},
      {"false":"Incorrect. Donec nec nisl id massa cursus viverra. Vivamus mollis tincidunt nunc sed lacinia. Integer pellentesque vel neque eget gravida. Etiam in risus vel orci tincidunt malesuada non vel neque. Fusce aliquam at libero vitae bibendum. Maecenas hendrerit ex in felis sollicitudin, non tempor mauris tempor. ", "correct": false}
      ]},
	]		


/*					End of text					  	 */ 

	$scope.showFirst = true;
    $scope.showSec = false;

    $scope.toggle = function() {
        $scope.showFirst = false;
        $scope.showSec = true;
    };

	$scope.showQuiz = false;
	
	$scope.showAnswerT = false;
	$scope.showAnswerF = false;
	$scope.showArrow = false;
	$scope.showtrueFalse = true;
	$scope.showAnswers = true;
	$scope.quizLevel = 0;
	$scope.quizComplete = 0;

	$scope.showArrowEnd = false;

	$scope.checkTrue = function() {
		$scope.showtrueFalse = false;
		$scope.showAnswerT = true;
		$scope.showArrow = true;
	};

	$scope.checkFalse = function() {
		$scope.showtrueFalse = false;
		$scope.showAnswerF = true;
		$scope.showArrow = true;		
	};

	$scope.changeQuiz = function() {
		$scope.quizLevel++;
		$scope.showtrueFalse = true;
		$scope.showAnswerT = false;
		$scope.showAnswerF = false;
		$scope.showArrow = false;
		console.log($scope.quizLevel);
		$scope.quizComplete++;
		if($scope.quizComplete == 12){
			$scope.showArrowEnd = true;
		}
	
		if($scope.quizLevel == 3 || $scope.quizLevel == 6 || $scope.quizLevel == 9 || $scope.quizLevel == 12){
			$scope.showQuiz = false;
		}
	}

	$scope.showDrag0 = true;
	$scope.showDrag1 = true;
	$scope.showDrag2 = true;
	$scope.showDrag3 = true;

$scope.dropCallback0  = function (event, ui) {
	var $target = $(event.target);
	var $dragBox = ui.draggable;
	$scope.quizLevel = 0;
	$(".minus0").hide();
	
	if( $dragBox.hasClass("dragBox0")){
		console.log("onnistui0")
		$scope.showQuiz = true;
		$scope.showComplete0 = true;
		$scope.showDrag0 = false;
				
	}else{
		console.log("failed 0");
		$($dragBox).css('background-color','#E05314');
	}	
};	

$scope.dropCallback1  = function (event, ui) {
	var $lane = $(event.target);
	var $dragBox = ui.draggable;    
	$scope.quizLevel = 3;
	$(".minus1").hide();

	if( $dragBox.hasClass("dragBox1")){
		console.log("onnistui1")
		$scope.showQuiz = true;
		$scope.showComplete1 = true;
		$scope.showDrag1 = false;			
	}else{
		console.log("failed 1");
		$($dragBox).css('background-color','#E05314');		
	}
	
	if($scope.quizComplete == 4){
	$scope.showArrowEnd = true;
}
	
};
$scope.dropCallback2  = function (event, ui) {
	var $lane = $(event.target);
	var $dragBox = ui.draggable;
	$scope.quizLevel = 6;
	$(".plus-grey2").hide();

if( $dragBox.hasClass("dragBox2")){
		console.log("onnistui2")
		$scope.showQuiz = true;
		$scope.showComplete2 = true;
		$scope.showDrag2 = false;			
	}else{
		console.log("failed 2");
		$($dragBox).css('background-color','#E05314');		
	}

	if($scope.quizComplete == 4){
	$scope.showArrowEnd = true;
}
	
};
$scope.dropCallback3  = function (event, ui) {
	var $lane = $(event.target);
	var $dragBox = ui.draggable;
	$scope.quizLevel = 9;
	$(".plus-grey3").hide();

if( $dragBox.hasClass("dragBox3")){
		console.log("onnistui3")
		$scope.showQuiz = true;
		$scope.showComplete3 = true;
		$scope.showDrag3 = false;		
	}else{
		console.log("failed 3");
		$($dragBox).css('background-color','#E05314');	
	}

	if($scope.quizComplete == 4){
	$scope.showArrowEnd = true;
	}	
};

$scope.reload  = function () {
	$window.location.reload();
};

})
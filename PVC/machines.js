var idCount = 1;
var curLang = "";

function generateHTML(lang) {
	curLang = lang.toUpperCase();
	renderHeader();
	renderShowcaseSection();
	renderCatalogSection();
	renderMachinesSection();
	renderScrollToTopButton();
	renderFooter();
}

function renderScrollToTopButton() {
	const button = `<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>`;
	document.body.innerHTML += button;
}

function renderTechDetails(techDetails) {
	return `${techDetails.map(techDetail => `<li>${techDetail.detail}</li>`).join("")}`;
}

function renderTechParams(techParams) {
	return `${techParams.map(techParam => `
    	<tr>
			<td>${(techParam.key).toLowerCase()}</td>
	    	<td>${techParam.value}<td>
	    </tr>
		`).join("")}`;
}

function renderHeader() {
	const headerMarkup = `
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#MyNavbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
				    	<span class="icon-bar"></span>
				    	<span class="icon-bar"></span>
					</button>	
					<a class="navbar-brand" href="#"><img id="logo" src="images/logo_big.svg"></a>
				</div>
				<div class="collapse navbar-collapse" id="MyNavbar">	
					<ul class="nav navbar-nav navbar-right pull-right">
						<li><a href="#catalog">Products</a></li>
						<li><a href="#footer">Contacts</a></li>
						<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" 
							aria-haspopup="true" aria-expanded="false"><img src="images/flags/${curLang.toLocaleLowerCase()}.png"> ${curLang} <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="index.html"><img src="images/flags/en.png"> English</a></li>
								<li><a href="bg.html"><img src="images/flags/bg.png"> Български</a></li>
								<li><a href="tr.html"><img src="images/flags/tr.png"> Türkçe</a></li>
								<li><a href="ru.html"><img src="images/flags/ru.png"> Руский</a></li>
								<li><a href="sr.html"><img src="images/flags/sr.png"> Српски</a></li>
								<li><a href="mk.html"><img src="images/flags/mk.png"> Македонски </a></li>
								<li><a href="ar.html"><img src="images/flags/ar.png"> عربي</a></li>
							</ul>
						</li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container-fluid -->
		</nav>
	`;

	document.body.innerHTML += headerMarkup;
}

function renderCatalogSection() {
	const subscribMarkup = `
		<section id="catalog">
			<div class="container">
				<h1 class="text-center">Products Catalog</h1>
			</div>
		</section>
	`;

	document.body.innerHTML += subscribMarkup;
}

function renderShowcaseSection() {
	const showcaseMarkup = `
		<section id="showcase">
			<div class="container">
				<h1></h1>
				<p>
				</p>
			</div>
		</section>
	`;

	document.body.innerHTML += showcaseMarkup;
}

function getMachinesInfoForLang(lang) {
	return machinesData.pages.find(function (element) {
		return element.language.toLowerCase() === lang.toLowerCase();
	});
}

function renderMachinesSection() {
	var allMachines = "";
	var bbbbbbbbb = getMachinesInfoForLang(curLang);
  
	for (var k = 0; k < bbbbbbbbb.machines.length; k++) {
		const detailsTabId = "tab" + generateTabId();
		const paramsTabId = "tab" + generateTabId();

		const markup = `							
		<div class="container surround">
			<div class="row">
				<div class="row">
					<div class="col-xs-12 machineName">
						<h4>${bbbbbbbbb.machines[k].title}</h4>
					</div>
				</div>
				<div class="col-sm-4 col-xs-12">
					<img class="machineImage" src="${bbbbbbbbb.machines[k].imageUrl}"/>
				</div>
				<div class="col-sm-8 col-xs-12">
					<ul class="nav nav-tabs">	
						<li role="presentation" class="active">
							<a data-toggle="tab" href="#" onclick="showTab('${detailsTabId}');hideTab('${paramsTabId}');return false;">
							${bbbbbbbbb.descriptionTabName}</a>
						</li>
						<li role="presentation">
							<a data-toggle="tab" href="#" onclick="showTab('${paramsTabId}');hideTab('${detailsTabId}');return false;">
							${bbbbbbbbb.detailsTabName}</a>
						</li>	
					</ul>
					<div>
						<div id="${detailsTabId}" style="display: block;">
							<ul>
								${renderTechDetails(bbbbbbbbb.machines[k].decription)}
							</ul>
						</div>
						<div id="${paramsTabId}" style="display: none;">
							<table>
								${renderTechParams(bbbbbbbbb.machines[k].technicalDetails)}
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>				
		`;
		allMachines += markup;
	}
	document.body.innerHTML += allMachines;
}

function renderFooter() {
	const footerMarkup = `
		<footer id="footer">
			<div class="container">
				<h3>Contact Us</h3>
				<div class="row">
					<div class="col-md-3"></div>
					<div class="col-md-3">
						<h4><i class="fa fa-map-marker" aria-hidden="true"></i> Head office: Turkey, Bursa</h4>
						<i class="fa fa-envelope-o" aria-hidden="true"></i> info.pvc.mashini@gmail.com<br>
						<i class="fa fa-skype" aria-hidden="true"></i> mumhum1<br>
						<i class="fa fa-phone" aria-hidden="true"></i> +90 534 391 74 16<br><br>
					</div>
					<div class="col-md-3">
						<h4><i class="fa fa-map-marker" aria-hidden="true"></i> Bulgaria, Kardzhali</h4>
						<i class="fa fa-envelope-o" aria-hidden="true"></i> pvc.mashini.bulgaria@gmail.com<br>
						<i class="fa fa-whatsapp" aria-hidden="true"></i> +359 882 79 25 14<br>
						<i class="fa fa-phone" aria-hidden="true"></i> +359 878 37 19 22<br><br>
					</div>
					<div class="col-md-3"></div>
			    </div>
			</div> <!-- Close container-->
			<hr>
			<h6>Hyumet Machinery Copyright &copy; 2018</h6>
		</footer>
	`;

	document.body.innerHTML += footerMarkup;
}

function showTab(tabId) {
	var tab = document.getElementById(tabId);
	tab.style.display = "block";
}

function hideTab(tabId) {
	var tab = document.getElementById(tabId);
	tab.style.display = "none";
}

function generateTabId() {
	return idCount++;
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

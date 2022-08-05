//On first install open onboarding
chrome.runtime.onInstalled.addListener(r => {
	if(r.reason == 'install'){
		//first install
		//show onboarding page
		chrome.tabs.create({
			url: 'onboarding-page.html'
		});
	};
});
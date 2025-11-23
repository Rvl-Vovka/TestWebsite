function DisableEverything(){
    const NavBarBeginning = document.getElementById("NavBarBeginning");
    NavBarBeginning.classList.remove('active');
    NavBarBeginning.classList.add('inactive');
    const NavBarEducation = document.getElementById("NavBarEducation");
    NavBarEducation.classList.remove('active');
    NavBarEducation.classList.add('inactive');
    const NavBarMedicine = document.getElementById("NavBarMedicine");
    NavBarMedicine.classList.remove('active');
    NavBarMedicine.classList.add('inactive');
    const NavBarIndustry = document.getElementById("NavBarIndustry");
    NavBarIndustry.classList.remove('active');
    NavBarIndustry.classList.add('inactive');
    const NavBarAgriculture = document.getElementById("NavBarAgriculture");
    NavBarAgriculture.classList.remove('active');
    NavBarAgriculture.classList.add('inactive');
    const NavBarCulture = document.getElementById("NavBarCulture");
    NavBarCulture.classList.remove('active');
    NavBarCulture.classList.add('inactive');
    const NavBarSport = document.getElementById("NavBarSport");
    NavBarSport.classList.remove('active');
    NavBarSport.classList.add('inactive');
    const NavBarSuggestions = document.getElementById("NavBarSuggestions");
    NavBarSuggestions.classList.remove('active');
    NavBarSuggestions.classList.add('inactive');
}
document.addEventListener('scroll', function() {
    const Width = document.documentElement.clientWidth
    const ScrollDistance = Width*0.06
    if(suggestions.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarSuggestions");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(sport.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarSport");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(culture.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarCulture");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(agriculture.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarAgriculture");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(industry.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarIndustry");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(medicine.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarMedicine");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else if(education.getBoundingClientRect().y<ScrollDistance){
        DisableEverything()
        const element = document.getElementById("NavBarEducation");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
    else{
        DisableEverything()
        const element = document.getElementById("NavBarBeginning");
        element.classList.remove('inactive');
        element.classList.add('active');
    }
});

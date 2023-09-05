//Navbar
const languageToggle = document.getElementById('language-toggle');
const textHomeIndex = document.getElementById('textHomeIndex');
const textAboutIndex = document.getElementById('textAboutIndex');
const textContactIndex = document.getElementById('textContactIndex');
const textApplyIndex = document.getElementById('textApplyIndex');

// Header
const textApplyOnlineApplication = document.getElementById('textApplyOnlineApplication');
const textApplyHome = document.getElementById('textApplyHome');
const textApplyApplyNow = document.getElementById('textApplyApplyNow');

//4 Simple Steps Section
const textSimpleSteps = document.getElementById('textSimpleSteps');
// const textSimpleStepsP = document.getElementById('textSimpleStepsP');
const textOnlineApplication = document.getElementById('textOnlineApplication');
const textOnlineApplicationP = document.getElementById('textOnlineApplicationP');
const textGetAppointment = document.getElementById('textGetAppointment');
const textGetAppointmentP = document.getElementById('textGetAppointmentP');
const textBringYourDocument = document.getElementById('textBringYourDocument');
const textBringYourDocumentP = document.getElementById('textBringYourDocumentP');
// const textMeetUs = document.getElementById('textMeetUs');
// const textMeetUsP = document.getElementById('textMeetUsP');

//Document Section
const textDocumentSection = document.getElementById('textDocumentSection');
const textDocumentSectionP = document.getElementById('textDocumentSectionP');
const textCopyNRIC = document.getElementById('textCopyNRIC');
const textPayslip = document.getElementById('textPayslip');
const textBankStatement = document.getElementById('textBankStatement');
const textEPF = document.getElementById('textEPF');
const textElectrical = document.getElementById('textElectrical');

//Apply Form
const OnlineApplication = document.getElementById('OnlineApplication');
const FillInYourDetails = document.getElementById('FillInYourDetails');
const LoanAmount = document.getElementById('LoanAmount');
const LoanAge = document.getElementById('LoanAge');
const NameAs = document.getElementById('NameAs');
const Email = document.getElementById('Email');
const Mobile = document.getElementById('Mobile');
const EmploymentSector = document.getElementById('EmploymentSector');
const PleaseSelect = document.getElementById('PleaseSelect');
const Government = document.getElementById('Government');
const GovernmentLink = document.getElementById('GovernmentLink');
const Private = document.getElementById('Private');
const MonthlyGrossSalary = document.getElementById('MonthlyGrossSalary');
const MonthlyNettSalary = document.getElementById('MonthlyNettSalary');
const Submit = document.getElementById('Submit');

//Footer
const textUsefulLinks = document.getElementById('textUsefulLinks');
const textHomeF = document.getElementById('textHomeF');
const textAboutUsF = document.getElementById('textAboutUsF');
const textOurOfferF = document.getElementById('textOurOfferF');
const textContactUsF = document.getElementById('textContactUsF');
const textApplyNowF = document.getElementById('textApplyNowF');
const textOurServicesF = document.getElementById('textOurServicesF');
const textPersonalLoanF = document.getElementById('textPersonalLoanF');
const textPaydayLoanF = document.getElementById('textPaydayLoanF');
const textBusinessLoanF = document.getElementById('textBusinessLoanF');
const textDebtConslidationF = document.getElementById('textDebtConslidationF');
const textIslamicFinancingF = document.getElementById('textIslamicFinancingF');
const textWeddingLoanF = document.getElementById('textWeddingLoanF');
const textRenovationLoanF = document.getElementById('textRenovationLoanF');
const textMedicalLoanF = document.getElementById('textMedicalLoanF');
const textEducationLoanF = document.getElementById('textEducationLoanF');
const textOurInformationF = document.getElementById('textOurInformationF');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
  languageToggle.checked = true;
  updateNavbar('bm');
  updateHeader('bm');
  updateStepSection('bm');
  updateDocumentSection('bm');
  updateApplyForm('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateHeader('en');
  updateStepSection('en');
  updateDocumentSection('en');
  updateApplyForm('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
  if (this.checked) {
    updateNavbar('bm');
    updateHeader('bm');
    updateStepSection('bm');
    updateDocumentSection('bm');
    updateApplyForm('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateHeader('en');
    updateStepSection('en');
    updateDocumentSection('en');
    updateApplyForm('en');
    updateFooter('en');
    localStorage.setItem('language', 'en');
  }
});

function updateNavbar(language) {
  if (language === 'bm') {
    textHomeIndex.textContent = 'Laman Utama';
    textAboutIndex.textContent = 'Tentang Kami';
    textContactIndex.textContent = 'Hubungi Kami';
    textApplyIndex.textContent = 'Mohon Sekarang';
  } else {
    textHomeIndex.textContent = 'Home';
    textAboutIndex.textContent = 'About Us';
    textContactIndex.textContent = 'Contact Us';
    textApplyIndex.textContent = 'Apply Now';
  }
}

function updateHeader(language) {
  if (language === 'bm') {
    textApplyOnlineApplication.textContent = 'Permohonan Atas Talian';
    textApplyHome.textContent = 'Laman Utama';
    textApplyApplyNow.textContent = 'Mohon Sekarang';
  } else {
    textApplyOnlineApplication.textContent = 'Online Application';
    textApplyHome.textContent = 'Home';
    textApplyApplyNow.textContent = 'Apply Now';
  }
}

function updateStepSection(language) {
  if (language === 'bm') {
    textSimpleSteps.textContent = 'Proses Permohonan';
    // textSimpleStepsP.textContent = 'untuk menerima wang tunai anda';
    textOnlineApplication.textContent = 'Permohonan Atas Talian';
    textOnlineApplicationP.textContent = 'Isi borang permohonan pinjaman di laman web kami';
    textGetAppointment.textContent = 'Tetapkan Tarikh Temujanji';
    textGetAppointmentP.innerHTML = 'Pihak kami akan menghubungi anda untuk penetapan tarikh dan pengesahan dokumen';
    textBringYourDocument.textContent = 'Sertakan/ Sediakan Dokumen penting';
    textBringYourDocumentP.textContent = 'Sediakan dokumen penting. (Rujuk bahagian dokumen dibawah)';
    // textMeetUs.textContent = 'Jumpa kami';
    // textMeetUsP.textContent = 'Pergi ke pejabat kami, tandatangani kontrak dan dapatkan wang anda dengan serta-merta.';
  } else {
    textSimpleSteps.textContent = 'Application Process';
    // textSimpleStepsP.textContent = 'to received your cash';
    textOnlineApplication.textContent = 'Online Application';
    textOnlineApplicationP.textContent = 'Fill up the loan application form.';
    textGetAppointment.textContent = 'Get an appointment date';
    textGetAppointmentP.innerHTML = 'We will reach out to you to arrange a suitable appointment date according to your convenience.';
    textBringYourDocument.textContent = 'Bring your documents';
    textBringYourDocumentP.textContent = 'Please ensure you bring all the necessary documents with you.';
    // textMeetUs.textContent = 'Meet us';
    // textMeetUsP.textContent = 'Head down to our office, sign the contract and get your money instantly.';
  }
}

function updateDocumentSection(language) {
  if (language === 'bm') {
    textDocumentSection.textContent = 'Bahagian Dokumen';
    textDocumentSectionP.textContent = 'Bawa bersama dokumen ini, untuk proses yang lebih lancar!';
    textCopyNRIC.textContent = 'SALINAN KAD PENGENALAN';
    textPayslip.textContent = 'SLIP GAJI 3 BULAN TERKINI';
    textBankStatement.textContent = 'PENYATAAN BANK 3 BULAN TERKINI';
    textEPF.textContent = 'PENYATAAN KWSP TERKINI';
    textElectrical.textContent = 'PENYATAAN BILL ELEKTRIK & AIR TERKINI';
  } else {
    textDocumentSection.textContent = 'Document Section';
    textDocumentSectionP.textContent = 'Bring these documents with you, for a smoother process!';
    textCopyNRIC.textContent = 'A COPY OF YOUR IDENTITY CARD';
    textPayslip.textContent = 'LATEST 3 MONTHS PAYSLIP';
    textBankStatement.textContent = 'LATEST 3 MONTHS BANK STATEMENT';
    textEPF.textContent = 'LATEST EPF STATEMENT';
    textElectrical.textContent = 'LATEST ELECTRIC & WATER BILL';
  }
}

function updateApplyForm(language) {
  if (language === 'bm') {
    OnlineApplication.textContent = 'Permohonan Atas Talian';
    FillInYourDetails.textContent = 'Isikan butiran anda di bawah dan hantar untuk bermula';
    LoanAmount.textContent = 'Jumlah pinjaman (RM):';
    LoanAge.textContent = 'Umur:';
    NameAs.textContent = 'Nama seperti dalam MyKad:';
    Email.textContent = 'Emel:';
    Mobile.textContent = 'Nombor telefon:';
    EmploymentSector.textContent = 'Sektor pekerjaan:';
    PleaseSelect.textContent = 'Sila Pilih';
    Government.textContent = 'Kerajaan';
    GovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
    Private.textContent = 'Swasta';
    MonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
    MonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
    Submit.textContent = 'Hantar';
  } else {
    OnlineApplication.textContent = 'Online Application';
    FillInYourDetails.textContent = 'Fill in your details below and submit to get started';
    LoanAmount.textContent = 'Loan Amount (RM):';
    LoanAge.textContent = 'Age:';
    NameAs.textContent = 'Name as In NRIC:';
    Email.textContent = 'Email:';
    Mobile.textContent = 'Mobile Contact No.:';
    EmploymentSector.textContent = 'Employment Sector:';
    PleaseSelect.textContent = 'Please Select';
    Government.textContent = 'Government';
    GovernmentLink.textContent = 'Government Link';
    Private.textContent = 'Private';
    MonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
    MonthlyNettSalary.textContent = 'Monthly Nett Salary (RM):';
    Submit.textContent = 'Submit';
  }
}

function updateFooter(language) {
  if (language === 'bm') {
    textUsefulLinks.textContent = 'Pautan Berguna';
    textHomeF.textContent = 'Laman Utama';
    textAboutUsF.textContent = 'tentang Kami';
    textContactUsF.textContent = 'Hubungi Kami';
    textApplyNowF.textContent = 'Mohon Sekarang';
    textOurServicesF.textContent = 'Perkhidmatan kami';
    textPersonalLoanF.textContent = 'Pembiayaan Peribadi';
    textPaydayLoanF.textContent = 'Pinjaman Habis Bulan';
    textBusinessLoanF.textContent = 'Pinjaman Perniagaan';
    textDebtConslidationF.textContent = 'Pemindahan Baki Hutang';
    textIslamicFinancingF.textContent = 'Pembiayaan Islamik';
    textWeddingLoanF.textContent = 'Pinjaman Perkahwinan';
    textRenovationLoanF.textContent = 'Pinjaman Renovasi';
    textMedicalLoanF.textContent = 'Pinjaman Perubatan';
    textEducationLoanF.textContent = 'Pinjaman Pelajaran';  
    textOurInformationF.textContent = 'Maklumat Kami';

  } else {
    textUsefulLinks.textContent = 'Useful Links';
    textHomeF.textContent = 'Home';
    textAboutUsF.textContent = 'About Us';
    textContactUsF.textContent = 'Contact Us';
    textApplyNowF.textContent = 'Apply Now';
    textOurServicesF.textContent = 'Our Services';
    textPersonalLoanF.textContent = 'Personal Loan';
    textPaydayLoanF.textContent = 'Payday Loan';
    textBusinessLoanF.textContent = 'Business Loan';
    textDebtConslidationF.textContent = 'Debt Conslidation';
    textIslamicFinancingF.textContent = 'Islamic Financing';
    textWeddingLoanF.textContent = 'Wedding Loan';
    textRenovationLoanF.textContent = 'Renovation Loan';
    textMedicalLoanF.textContent = 'Medical Loan';
    textEducationLoanF.textContent = 'Education Loan';
    textOurInformationF.textContent = 'Our Information';

  }
}

function updateElementContent(element, translation, language) {
  if (translation && translation[language]) {
    const translatedText = translation[language].replace(/{newline}/g, '<br>');
    element.innerHTML = translatedText;
  }
}

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
const textSimpleStepsP = document.getElementById('textSimpleStepsP');
const textOnlineApplication = document.getElementById('textOnlineApplication');
const textOnlineApplicationP = document.getElementById('textOnlineApplicationP');
const textGetAppointment = document.getElementById('textGetAppointment');
const textGetAppointmentP = document.getElementById('textGetAppointmentP');
const textBringYourDocument = document.getElementById('textBringYourDocument');
const textBringYourDocumentP = document.getElementById('textBringYourDocumentP');
const textMeetUs = document.getElementById('textMeetUs');
const textMeetUsP = document.getElementById('textMeetUsP');

//Document Section
const textDocumentSection = document.getElementById('textDocumentSection');
const textDocumentSectionP = document.getElementById('textDocumentSectionP');
const textCopyNRIC = document.getElementById('textCopyNRIC');
const textPayslip = document.getElementById('textPayslip');
const textBankStatement = document.getElementById('textBankStatement');
const textEPF = document.getElementById('textEPF');
const textElectrical = document.getElementById('textElectrical');

//Online Application
const textOnlineApplicationForm = document.getElementById('textOnlineApplicationForm');
const textOnlineApplicationFormP = document.getElementById('textOnlineApplicationFormP');
const textLoanAmount = document.getElementById('textLoanAmount');
const textLoanAge = document.getElementById('textLoanAge');
const textNameAs = document.getElementById('textNameAs');
const textEmail = document.getElementById('textEmail');
const textMobile = document.getElementById('textMobile');
const textEmploymentSector = document.getElementById('textEmploymentSector');
const textPleaseSelect = document.getElementById('textPleaseSelect');
const textGovernment = document.getElementById('textGovernment');
const textGovernmentLink = document.getElementById('textGovernmentLink');
const textPrivate = document.getElementById('textPrivate');
const textMonthlyGrossSalary = document.getElementById('textMonthlyGrossSalary');
const textMonthlyNettSalary = document.getElementById('textMonthlyNettSalary');
// const textIagree = document.getElementById('textIagree');
// const textTnC = document.getElementById('textTnC');

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
  updateOnlineApplication('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateHeader('en');
  updateStepSection('en');
  updateDocumentSection('en');
  updateOnlineApplication('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
  if (this.checked) {
    updateNavbar('bm');
    updateHeader('bm');
    updateStepSection('bm');
    updateDocumentSection('bm');
    updateOnlineApplication('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateHeader('en');
    updateStepSection('en');
    updateDocumentSection('en');
    updateOnlineApplication('en');
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
    textApplyOnlineApplication.textContent = 'Permohonan Dalam Talian';
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
    textSimpleSteps.textContent = '4 langkah mudah';
    textSimpleStepsP.textContent = 'untuk menerima wang tunai anda';
    textOnlineApplication.textContent = 'Aplikasi Online';
    textOnlineApplicationP.textContent = 'Isi borang permohonan pinjaman. Ia hanya mengambil masa 3 minit sahaja.';
    textGetAppointment.textContent = 'Dapatkan tarikh temu janji';
    textGetAppointmentP.innerHTML = 'Kami akan menghubungi anda untuk mengatur tarikh temu janji yang sesuai mengikut keselesaan anda.';
    textBringYourDocument.textContent = 'Bawa dokumen anda';
    textBringYourDocumentP.textContent = 'Sila pastikan anda membawa semua dokumen yang diperlukan.';
    textMeetUs.textContent = 'Jumpa kami';
    textMeetUsP.textContent = 'Pergi ke pejabat kami, tandatangani kontrak dan dapatkan wang anda dengan serta-merta.';
  } else {
    textSimpleSteps.textContent = '4 Simple steps';
    textSimpleStepsP.textContent = 'to received your cash';
    textOnlineApplication.textContent = 'Online Application';
    textOnlineApplicationP.textContent = 'Fill up the loan application form. Takes only 3 mins.';
    textGetAppointment.textContent = 'Get an appointment date';
    textGetAppointmentP.innerHTML = 'We will reach out to you to arrange a suitable appointment date according <br>to your convenience.';
    textBringYourDocument.textContent = 'Bring your documents';
    textBringYourDocumentP.textContent = 'Please ensure you bring all the necessary documents with you.';
    textMeetUs.textContent = 'Meet us';
    textMeetUsP.textContent = 'Head down to our office, sign the contract and get your money instantly.';
  }
}

function updateDocumentSection(language) {
  if (language === 'bm') {
    textDocumentSection.textContent = 'Bahagian Dokumen';
    textDocumentSectionP.textContent = 'Bawa bersama dokumen ini, untuk proses yang lebih lancar!';
    textCopyNRIC.textContent = 'SALINAN KAD PENGENALAN ANDA';
    textPayslip.textContent = 'SLIP GAJI 3 BULAN TERKINI';
    textBankStatement.textContent = 'KENYATAAN BANK 3 BULAN TERKINI';
    textEPF.textContent = 'KENYATAAN KWSP TERKINI';
    textElectrical.textContent = 'KENYATAAN BILL ELEKTRIK & AIR TERKINI';
  } else {
    textDocumentSection.textContent = 'Document Section';
    textDocumentSectionP.textContent = 'Bring these documents with you, for a smoother process!';
    textCopyNRIC.textContent = 'A COPY OF YOUR IDENTITY CARD';
    textPayslip.textContent = 'LATEST 3 MONTHS PAYSLIP';
    textBankStatement.textContent = 'LATEST 3 MONTHS BANK STATEMENT';
    textEPF.textContent = 'LATEST EPF STATEMENT';
    textElectrical.textContent = 'LATEST ELECTRIC & <br>WATER BILL';
  }
}

function updateOnlineApplication(language) {
  if (language === 'bm') {
    textOnlineApplicationForm.textContent = 'Permohonan Dalam Talian';
    textOnlineApplicationFormP.textContent = 'Isikan butiran anda di bawah dan hantar untuk bermula';
    textLoanAmount.textContent = 'Amaun pinjaman (RM):';
    textLoanAge.textContent = 'Umur:';
    textNameAs.textContent = 'Nama seperti dalam MyKad:';
    textEmail.textContent = 'Emel:';
    textMobile.textContent = 'Nombor telefon:';
    textEmploymentSector.textContent = 'Sektor pekerjaan:';
    textPleaseSelect.textContent = 'Sila Pilih';
    textGovernment.textContent = 'Kerajaan';
    textGovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
    textPrivate.textContent = 'Swasta';
    textMonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
    textMonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
    // textIagree.textContent = 'Saya bersetuju dengan yang ditakrifkan';
    // textTnC.textContent = 'terma, syarat dan polisi';
    textSubmit.textContent = 'Mohon';
    

  } else {
    textOnlineApplicationForm.textContent = 'Online Application';
    textOnlineApplicationFormP.textContent = 'Fill in your details below and submit to get started';
    textLoanAmount.textContent = 'Loan Amount (RM):';
    textLoanAge.textContent = 'Age:';
    textNameAs.textContent = 'Name as In NRIC:';
    textEmail.textContent = 'Email:';
    textMobile.textContent = 'Mobile Contact No.:';
    textEmploymentSector.textContent = 'Employment Sector:';
    textPleaseSelect.textContent = 'Please Select';
    textGovernment.textContent = 'Government';
    textGovernmentLink.textContent = 'Government link';
    textPrivate.textContent = 'Private';
    textMonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
    textMonthlyNettSalary.textContent = 'Monthly Nett Salary (RM):';
    // textIagree.textContent = 'I agree to the defined';
    // textTnC.textContent = 'terms, conditions, and policies';
    textSubmit.textContent = 'Submit';
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
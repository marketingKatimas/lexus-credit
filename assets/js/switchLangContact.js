document.addEventListener('DOMContentLoaded', function() {
    const elements = {
      //Navbar
      languageToggle: document.getElementById('language-toggle'),
      textHomeIndex: document.getElementById('textHomeIndex'),
      textAboutIndex: document.getElementById('textAboutIndex'),
      textContactIndex: document.getElementById('textContactIndex'),
      textApplyIndex: document.getElementById('textApplyIndex'),

      //Contact Us
      textContactUs: document.getElementById('textContactUs'),
      textHome: document.getElementById('textHome'),
      textContact: document.getElementById('textContact'),
      textAddress: document.getElementById('textAddress'),
      textEmail: document.getElementById('textEmail'),
      textPhone: document.getElementById('textPhone'),
      textDropAMessage: document.getElementById('textDropAMessage'),
      textName: document.getElementById('name'),
      textEmail: document.getElementById('email'),
      textPhone: document.getElementById('phone'),
      textMessage: document.getElementById('message'),
      textSendMessage: document.getElementById('textSendMessage'),

      //Footer
      textUsefulLinks: document.getElementById('textUsefulLinks'),
      textHomeF: document.getElementById('textHomeF'),
      textAboutF: document.getElementById('textAboutF'),
      textContactF: document.getElementById('textContactF'),
      textApplyNowF: document.getElementById('textApplyNowF'),

      textOurService: document.getElementById('textOurService'),
      textPersonalF: document.getElementById('textPersonalF'),
      textPaydayF: document.getElementById('textPaydayF'),
      textBusinessF: document.getElementById('textBusinessF'),
      textDebtF: document.getElementById('textDebtF'),
      textIslamicF: document.getElementById('textIslamicF'),
      textWeddingF: document.getElementById('textWeddingF'),
      textRenovationF: document.getElementById('textRenovationF'),
      textMedicalF: document.getElementById('textMedicalF'),
      textEducationF: document.getElementById('textEducationF'),

      textOurInformation: document.getElementById('textOurInformation'),
      textPrivacyPlicy: document.getElementById('textPrivacyPlicy'),
      textTerm: document.getElementById('textTerm'),


    };
  
    // Check the current language preference and update the switch accordingly
    if (localStorage.getItem('language') === 'bm') {
      elements.languageToggle.checked = 'bm';
      updateContent('bm');
    } else {
      elements.languageToggle.checked = 'en';
      updateContent('en');
    }
  
    // Add event listener to the language toggle select
    elements.languageToggle.addEventListener('change', function () {
        if (this.checked) {
          updateContent('bm');
          localStorage.setItem('language', 'bm');
        } else {
          updateContent('en');
          localStorage.setItem('language', 'en');
        }
      })
  
    function updateContent(language) {
      const translations = {
        // Navbar
        textHomeIndex: { en: 'Home', bm: 'Laman Utama' },
        textAboutIndex: { en: 'About Us', bm: 'Tentang Kami' },
        textContactIndex: { en: 'Contact Us', bm: 'Hubungi Kami' },
        textApplyIndex: { en: 'Apply Now', bm: 'Mohon Sekarang' },

        //Contact Us
        textContactUs: { en: 'Contact Us', bm: 'Hubungi Kami' },
        textHome: { en: 'Home', bm: 'Laman Utama' },
        textContact: { en: 'Contact Us', bm: 'Hubungi Kami' },
        textAddress: { en: 'Address', bm: 'Alamat' },
        textEmail: { en: 'Email', bm: 'E-mel' },
        textPhone: { en: 'Phone', bm: 'Telefon' },
        textDropAMessage: { 
          en: 'Drop us a message for any query', 
          bm: 'Hantarkan mesej kepada kami untuk sebarang pertanyaan' 
        },
        textName: { en: 'Name', bm: 'Nama' },
        textEmail: { en: 'Email', bm: 'Emel' },
        textPhone: { en: 'Phone', bm: 'Telefon' },
        textMessage: { en: 'Your Message', bm: 'Mesej Anda' },
        textSendMessage: { en: 'Send Message', bm: 'Hantar Mesej' },

        //Footer
        textUsefulLinks: { en: 'Useful Links', bm: 'Pautan Berguna' },
        textHomeF: { en: 'Home', bm: 'Laman Utama' },
        textAboutF: { en: 'About Us', bm: 'Tentang Kami' },
        textContactF: { en: 'Contact Us', bm: 'Hubungi Kami' },
        textApplyNowF: { en: 'Apply Now', bm: 'Mohon Sekarang' },

        textOurService: { en: 'Our Services', bm: 'Perkhidmatan Kami' },
        textPersonalF: { en: 'Personal Loan', bm: 'Pembiayaan Peribadi' },
        textPaydayF: { en: 'Payday Loan', bm: 'Pembiayaan Hari Gaji' },
        textBusinessF: { en: 'Business Loan', bm: 'Pembiayaan Bisnes' },
        textDebtF: { en: 'Debt Conslidation', bm: 'Penyatuan Hutang' },
        textIslamicF: { en: 'Islamic Financing', bm: 'Pembiayaan Islamik' },
        textWeddingF: { en: 'Wedding Loan', bm: 'Pembiayaan Kahwin' },
        textRenovationF: { en: 'Renovation Loan', bm: 'Pembiayaan Renovasi' },
        textMedicalF: { en: 'Medical Loan', bm: 'Pembiayaan Perubatan' },
        textEducationF: { en: 'Education Loan', bm: 'Pembiayaan Pendidikan' },

        textOurInformation: { en: 'Our Information', bm: 'Maklumat Kami' },
        textPrivacyPlicy: { en: 'Privacy Policy', bm: 'Dasar Privasi' },
        textTerm: { en: 'Terms & Conditions', bm: 'Terma & Syarat' },
        

        
      };

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const messageInput = document.getElementById('message');
      if (nameInput) {
        nameInput.placeholder = translations.textName[language];
      }
      if (emailInput) {
        emailInput.placeholder = translations.textEmail[language];
      }
      if (phoneInput) {
        phoneInput.placeholder = translations.textPhone[language];
      }
      if (messageInput) {
        messageInput.placeholder = translations.textMessage[language];
      }

   





      for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
          const element = elements[key];
          const translation = translations[key];
          if (translation) {
            if (/<[a-z][\s\S]*>|<br>/i.test(translation[language])) {
              element.innerHTML = translation[language];
            } else {
              element.textContent = translation[language];
            }
          }
        }
      }
    }
  });
  
  
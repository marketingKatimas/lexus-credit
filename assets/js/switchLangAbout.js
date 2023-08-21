document.addEventListener('DOMContentLoaded', function() {
    const elements = {
      //Navbar
      languageToggle: document.getElementById('language-toggle'),
      textHomeIndex: document.getElementById('textHomeIndex'),
      textAboutIndex: document.getElementById('textAboutIndex'),
      textContactIndex: document.getElementById('textContactIndex'),
      textApplyIndex: document.getElementById('textApplyIndex'),

      //About us
      textAboutUs: document.getElementById('textAboutUs'),
      textHomeLi: document.getElementById('textHomeLi'),
      textAboutUsLi: document.getElementById('textAboutUsLi'),

      textWhatIsLexus: document.getElementById('textWhatIsLexus'),
      textWhatIsLexusH3: document.getElementById('textWhatIsLexusH3'),
      textWhatIsLexusP: document.getElementById('textWhatIsLexusP'),
      textContactUs: document.getElementById('textContactUs'),

      textOurValues: document.getElementById('textOurValues'),
      textOurValuesP: document.getElementById('textOurValuesP'),
      textTransparency: document.getElementById('textTransparency'),
      textTransparencyP: document.getElementById('textTransparencyP'),
      textDataPrivacy: document.getElementById('textDataPrivacy'),
      textDataPrivacyP: document.getElementById('textDataPrivacyP'),

      //Banner
      textSetAnAppointment: document.getElementById('textSetAnAppointment'),
      textSetAnAppointmentP: document.getElementById('textSetAnAppointmentP'),
      textApplyNowBtn: document.getElementById('textApplyNowBtn'),

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

        //About Us
        textAboutUs: { en: 'About Us', bm: 'Tentang Kami' },
        textHomeLi: { en: 'Home', bm: 'Laman Utama' },
        textAboutUsLi: { en: 'About Us', bm: 'Tentang Kami' },

        textWhatIsLexus: { en: 'What is Lexus Credit?', bm: 'Apakah itu Lexus Credit?' },
        textWhatIsLexusH3: { 
            en: 'A loan provider that help you get the money that you need, FAST.', 
            bm: 'Syarikat Kredit yang membantu anda menunaikan keperluan kewangan anda, dengan PANTAS.' 
        },
        textWhatIsLexusP: { 
            en: 'Lexus Credit, not only promises fast funding & fast approval for your benefit but also caters to your financial needs, no matter what your circumstances are. That means you only need to bring simple documents, for easier & faster approval of your loans, at no hidden fees.', 
            bm: 'Lexus Credit menjanjikan pembiayaan yang pantas pada kadar kelulusan yang tinggi untuk keperluan kewangan anda. Tidak kira situasi anda bagaimana, kami sentiasa bersedia membantu dari segi keperluan kewangan anda. Anda hanya perlu membawa dokumen yang ringkas sahaja untuk kelulusan pembiayaan yang lebih senang & lebih pantas; tanpa yuran tersembunyi.' 
        },
        textContactUs: { en: 'Contact Us', bm: 'Hubungi Kami' },

        textOurValues: { en: 'Our values', bm: 'Nilai kami' },
        textOurValuesP: { 
            en: 'Two key values that define our organization are transparency and data privacy.', 
            bm: 'Dua nilai utama yang menentukan organisasi kami ialah ketelusan dan privasi data.' 
        },

        textTransparency: { en: 'Transparency', bm: 'Ketelusan' },
        textTransparencyP: { 
            en: 'No matter what happens throughout the process, we ensure you are kept in the loop and understand the standard of procedure.', 
            bm: 'Tidak kira apa yang berlaku sepanjang proses, kami memastikan anda sedia maklum dan faham prosedur yang dijalani.' 
        },

        textDataPrivacy: { en: 'Data Privacy', bm: 'Privasi Data' },
        textDataPrivacyP: { 
            en: 'You are protected under the Personal Data Protection Act 2010, to shield you and your information from any irresponsible parties.', 
            bm: 'Anda dilindungi di bawah Akta Perlindungan Data Peribadi 2010, untuk melindungi anda dan maklumat anda daripada pihak-pihak yang tidak bertanggungjawab.' 
        },

        //Banner
        textSetAnAppointment: { 
            en: 'Set an appointment today', 
            bm: 'Tetapkan temu janji hari ini' 
        },
        textSetAnAppointmentP: { 
            en: 'Our professional loan officers are just a call away for all your financial needs', 
            bm: 'Pegawai pinjaman profesional kami hanya perlu dihubungi untuk semua keperluan kewangan anda' 
        },
        textApplyNowBtn: { en: 'Apply Now', bm: 'Mohon Sekarang' },

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
  
  
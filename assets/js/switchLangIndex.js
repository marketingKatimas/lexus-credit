document.addEventListener('DOMContentLoaded', function() {
  const elements = {
    //Navbar
    languageToggle: document.getElementById('language-toggle'),
    textHomeIndex: document.getElementById('textHomeIndex'),
    textAboutIndex: document.getElementById('textAboutIndex'),
    textContactIndex: document.getElementById('textContactIndex'),
    textApplyIndex: document.getElementById('textApplyIndex'),

    //Banner
    textSolve: document.getElementById('textSolve'),
    textEfficient: document.getElementById('textEfficient'),
    textWhatWeOffer: document.getElementById('textWhatWeOffer'),
    textApplyBanner1: document.getElementById('textApplyBanner1'),

    textSolution: document.getElementById('textSolution'),
    textApplyToday: document.getElementById('textApplyToday'),
    textContactUs: document.getElementById('textContactUs'),
    textApply2: document.getElementById('textApply2'),

    //Why Our Services
    textWhyOurServices: document.getElementById('textWhyOurServices'),
    textWhyOurServicesH3: document.getElementById('textWhyOurServicesH3'),
    textWhyOurServicesP: document.getElementById('textWhyOurServicesP'),
    textNoHiddenFee: document.getElementById('textNoHiddenFee'),
    textNoHiddenFeeP: document.getElementById('textNoHiddenFeeP'),
    textRefinancing: document.getElementById('textRefinancing'),
    textRefinancingP: document.getElementById('textRefinancingP'),
    textOpenToMalaysians: document.getElementById('textOpenToMalaysians'),
    textOpenToMalaysiansP: document.getElementById('textOpenToMalaysiansP'),
    textTawarruq: document.getElementById('textTawarruq'),
    textTawarruqP: document.getElementById('textTawarruqP'),
    textFixedShariah: document.getElementById('textFixedShariah'),
    textFixedShariahP: document.getElementById('textFixedShariahP'),
    textApplyTodayApproved: document.getElementById('textApplyTodayApproved'),
    textApplyTodayApprovedP: document.getElementById('textApplyTodayApprovedP'),

    //Type of Services we Offer
    textTypeOfServices: document.getElementById('textTypeOfServices'),
    textTypeOfServicesP: document.getElementById('textTypeOfServicesP'),

    textPersonalLoanServices: document.getElementById('textPersonalLoanServices'),
    textPersonalLoanServicesP: document.getElementById('textPersonalLoanServicesP'),
    textPersonalLoanRead: document.getElementById('textPersonalLoanRead'),

    textPaydayLoanServices: document.getElementById('textPaydayLoanServices'),
    textPaydayLoanServicesP: document.getElementById('textPaydayLoanServicesP'),
    textPaydayLoanRead: document.getElementById('textPaydayLoanRead'),

    textBusinessLoanServices: document.getElementById('textBusinessLoanServices'),
    textBusinessLoanServicesP: document.getElementById('textBusinessLoanServicesP'),
    textBusinessLoanRead: document.getElementById('textBusinessLoanRead'),

    textDebtConsolidationServices: document.getElementById('textDebtConsolidationServices'),
    textDebtConsolidationServicesP: document.getElementById('textDebtConsolidationServicesP'),
    textDebtLoanRead: document.getElementById('textDebtLoanRead'),

    textIslamicLoanServices: document.getElementById('textIslamicLoanServices'),
    textIslamicLoanServicesP: document.getElementById('textIslamicLoanServicesP'),
    textIslamicLoanRead: document.getElementById('textIslamicLoanRead'),

    textWeddingLoanServices: document.getElementById('textWeddingLoanServices'),
    textWeddingLoanServicesP: document.getElementById('textWeddingLoanServicesP'),
    textWeddingLoanRead: document.getElementById('textWeddingLoanRead'),

    textRenovationLoanServices: document.getElementById('textRenovationLoanServices'),
    textRenovationLoanServicesP: document.getElementById('textRenovationLoanServicesP'),
    textRenovationLoanRead: document.getElementById('textRenovationLoanRead'),

    textMedicalLoanServices: document.getElementById('textMedicalLoanServices'),
    textMedicalLoanServicesP: document.getElementById('textMedicalLoanServicesP'),
    textMedicalLoanRead: document.getElementById('textMedicalLoanRead'),

    textEducationLoanServices: document.getElementById('textEducationLoanServices'),
    textEducationLoanServicesP: document.getElementById('textEducationLoanServicesP'),
    textEducationLoanRead: document.getElementById('textEducationLoanRead'),

    //Banner Free Loan Consultation
    textFreeLoanCon: document.getElementById('textFreeLoanCon'),
    textFreeLoanConP: document.getElementById('textFreeLoanConP'),
    textContactUsBtn: document.getElementById('textContactUsBtn'),

    //Loan Calculator
    textPersonalLoanCal: document.getElementById('textPersonalLoanCal'),
    textLoanAmount: document.getElementById('textLoanAmount'),
    textTenure: document.getElementById('textTenure'),

    textYourMonthlyPayment: document.getElementById('textYourMonthlyPayment'),
    textTotalAmount: document.getElementById('textTotalAmount'),
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

      //Banner
      textSolve: { 
        en: 'Solve your financial issues quickly with <br> low interest rates', 
        bm: 'Selesaikan isu kewangan anda dengan cepat dan dengan <br>kadar faedah yang rendah' 
      },
      textEfficient: { 
        en: 'Efficient. Trustworthy. For Everyone.', 
        bm: 'Efisien. Amanah. Untuk Semua.' 
      },
      textWhatWeOffer: { en: 'What We Offer', bm: 'Tawaran kami'},
      textApplyBanner1: { en: 'Apply Today', bm: 'Mohon hari ini'},

      textSolution: { 
        en: 'SOLUTIONS TO YOUR FINANCIAL NEEDS', 
        bm: 'PENYELESAIAN KEPADA KEPERLUAN KEWANGAN ANDA'
      },
      textApplyToday: { 
        en: 'Apply today, approve today', 
        bm: 'Mohon hari ini, dapat kelulusan segera'
      },
      textContactUs: { en: 'Contact Us', bm: 'Hubungi kami' },
      textApply2: { en: 'Apply Today', bm: 'Mohon hari ini' },

      //Why Our Service
      textWhyOurServices: { 
        en: 'Why Our services', 
        bm: 'Mengapa Perkhidmatan Kami'
      },
      textWhyOurServicesH3: { 
        en: 'Everything you get with Lexus Credit', 
        bm: 'Semua yang anda akan dapat dengan Lexus Credit'
      },
      textWhyOurServicesP: { 
        en: 'Experience a comprehensive range of benefits and advantages that come with Lexus Credit.', 
        bm: 'Alami rangkaian lengkap manfaat dan kelebihan yang datang dengan Lexus Credit.'
      },
      textNoHiddenFee: { en: 'No hidden fees', bm: 'Tiada yuran tersembunyi'},
      textNoHiddenFeeP: { 
        en: 'No hidden fees, just straightforward and transparent financing.', 
        bm: 'Tiada yuran tersembunyi, hanya pembiayaan yang mudah dan telus.'
      },
      textRefinancing: { en: 'Refinancing allowed, if needed', bm: 'Refinancing dibenarkan, jika perlu '},
      textRefinancingP: { 
        en: 'Enjoy the flexibility of refinancing, ensuring you have the option to make adjustments when necessary.', 
        bm: 'Nikmati fleksibiliti pembiayaan semula, memastikan anda mempunyai pilihan untuk membuat pelarasan apabila perlu.'
      },
      textOpenToMalaysians: { en: 'Open to Malaysians', bm: 'Terbuka kepada warga Malaysia'},
      textOpenToMalaysiansP: { 
        en: 'Offering tailored solutions and benefits designed specifically for the local market.', 
        bm: 'Menawarkan penyelesaian yang disesuaikan dan faedah yang direka khusus untuk pasaran tempatan.'
      },
      textTawarruq: { en: 'Tawarruq financing', bm: 'Pembiayaan tawarruq'},
      textTawarruqP: { 
        en: 'Lexus Credit offers Tawarruq financing, providing a Shariah-compliant solution for your financial needs', 
        bm: 'Lexus Credit menawarkan pembiayaan Tawarruq, menyediakan penyelesaian patuh Syariah untuk keperluan kewangan anda'
      },
      textFixedShariah: { 
        en: 'Fixed & shariah-compliant profit rate', 
        bm: 'Kadar profit tetap & patuh syariah'
      },
      textFixedShariahP: { 
        en: "Benefit from the stability and transparency of Lexus Credit's fixed and Shariah-compliant profit rates, ensuring a reliable and ethical approach to your financing.", 
        bm: 'Manfaat daripada kestabilan dan ketelusan kadar keuntungan tetap dan patuh Syariah Lexus Credit, memastikan pendekatan yang boleh dipercayai dan beretika untuk pembiayaan anda.'
      },
      textApplyTodayApproved: { en: 'Apply today, approve today', bm: 'Mohon hari ini, dapat kelulusan segera'},
      textApplyTodayApprovedP: { 
        en: 'Experience the convenience of applying and receiving approval on the same day with Lexus Credit, making your financial journey seamless and efficient.', 
        bm: 'Alami kemudahan memohon dan menerima kelulusan pada hari yang sama dengan Lexus Credit, menjadikan perjalanan kewangan anda lancar dan cekap.'
      },


      //Type of Services We Offer
      textTypeOfServices: { 
        en: 'Types of services we offer', 
        bm: 'Jenis perkhidmatan yang kami tawarkan'
      },
      textTypeOfServicesP: { 
        en: 'We offer different kinds of loans depending on amount approved and tenure with low interest rates.', 
        bm: 'Kami menawarkan pelbagai jenis pinjaman bergantung pada jumlah yang diluluskan dan tempoh dengan kadar faedah yang rendah.'
      },

      textPersonalLoanServices: { en: 'PERSONAL LOAN', bm: 'PEMBIAYAAN PERIBADI'},
      textPersonalLoanServicesP: { 
        en: 'With our personal loan, you will receive a personalised plan based on your <span class="dots">...</span><span class="more">creditworthiness and income, so your monthly repayments are well within budget, without overburdening your finance.</span>', 
        bm: 'Dengan pembiayaan peribadi kami, anda akan menerima pelan peribadi berdasarkan <span class="dots">...</span><span class="more">kelayakan kredit dan pendapatan anda, agar bayaran balik anda mengikuti bajet tanpa membebankan kewangan anda.</span>'
      },
      textPersonalLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textPaydayLoanServices: { en: 'PAYDAY LOAN', bm: 'PEMBIAYAAN HARI GAJI'},
      textPaydayLoanServicesP: { 
        en: 'For unexpected situations, our payday loans exist to provide instant financial relief that you need.<span class="dots"> ... </span><span class="more">Navigate through challenging situations with fast and accessible loans until your next paycheck.</span>', 
        bm: 'Bagi situasi tidak diduga, pembiayaan hari gaji diwujudkan untuk memberi anda bantuan <span class="dots"> ... </span><span class="more">kewangan segera. Tangani situasi mencabar dengan pembiayaan pantas dan selamat sehingga hari gaji seterusnya.</span>'
      },
      textPaydayLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textBusinessLoanServices: { en: 'BUSINESS LOAN', bm: 'PEMBIAYAAN BISNES'},
      textBusinessLoanServicesP: { 
        en: 'Our business loan provides capital for your business to expand your startups and manage better cash <span class="dots"> ... </span><span class="more">flow. With our low interest rate, we can help fuel your business journey better.</span>', 
        bm: 'Pembiayaan bisnes kami menyediakan modal untuk bisnes anda supaya anda dapat kembangkan <span class="dots"> ... </span><span class="more">perniagaan dan urus cash flow anda dengan lebih bijak. Dengan kadar faedah rendah, pilih pembiayaan bisnes kami untuk perkembangan perniagaan anda.</span>'
      },
      textBusinessLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textDebtConsolidationServices: { en: 'DEBT CONSOLIDATION', bm: 'PENYATUAN HUTANG'},
      textDebtConsolidationServicesP: { 
        en: 'Don’t let multiple debts weigh you down! Manage and reduce your interest burden and take control <span class="dots"> ... </span><span class="more">of your finances with our low interest rate solution.</span>', 
        bm: 'Jangan biarkan hutang berlambak membebankan anda! Urus dan kurangkan beban faedah dan <span class="dots"> ... </span><span class="more">kawal kewangan anda dengan khidmat penyatuan hutang kami yang berfaedah rendah.</span>'
      },
      textDebtLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textIslamicLoanServices: { en: 'ISLAMIC LOAN', bm: 'PEMBIAYAAN ISLAMIK'},
      textIslamicLoanServicesP: { 
        en: 'Our Islamic loans are shariah-compliant with complete adherence to the tawarruq system, <span class="dots"> ... </span><span class="more">ensuring transparency and fairness. Pursue your financial goals with us with confidence and trust!</span>', 
        bm: 'Pembiayaan Islamik kami patuh pada syariah dan mengikuti sistem tawarruq, memastikan <span class="dots"> ... </span><span class="more">pembiayaan kami telus dan adil. Kecapi matlamat kewangan anda dengan yakin dan amanah!</span>'
      },
      textIslamicLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textWeddingLoanServices: { en: 'WEDDING LOAN', bm: 'PEMBIAYAAN KAHWIN'},
      textWeddingLoanServicesP: { 
        en: 'Getting married? Fund your dream wedding with us! Our wedding loan is designed to cover all your <span class="dots"> ... </span><span class="more">wedding expenses so you can enjoy the day you’ll remember forever.</span>', 
        bm: 'Untuk yang ingin berkahwin, biayai majlis kahwin idaman anda dengan pembiayaan perkahwinan <span class="dots"> ... </span><span class="more">kami! Pembiayaan ini merangkumi segala keperluan kahwin anda supaya anda dapat nikmati hari bahagia tanpa gelisah.</span>'
      },
      textWeddingLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textRenovationLoanServices: { en: 'RENOVATION LOAN', bm: 'PEMBIAYAAN RENOVASI'},
      textRenovationLoanServicesP: { 
        en: 'Get the necessary funds to renovate your current home into your ideal home! Give your interior a <span class="dots"> ... </span><span class="more">fresh new look with our flexible terms with a low interest rate and make your home project a reality!</span>', 
        bm: 'Dapatkan modal untuk ubahsuai rumah anda yang sekarang kepada rumah impian! Berikan interior <span class="dots"> ... </span><span class="more">rupa yang baharu dengan pembiayaan fleksibel kami, pada kadar faedah yang rendah. Jadikan projek ubahsuai rumah anda suatu kenyataan!</span>'
      },
      textRenovationLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textMedicalLoanServices: { en: 'MEDICAL LOAN', bm: 'PEMBIAYAAN PERUBATAN'},
      textMedicalLoanServicesP: { 
        en: 'Your health is our priority, and with our medical loan, you can receive the support you need. <span class="dots"> ... </span><span class="more">Focus on your well-being with our flexible repayment options and quick approval process.</span>', 
        bm: 'Kesihatan anda keutamaan kami. Dengan pembiayaan perubatan kami, dapatkan sokongan <span class="dots"> ... </span><span class="more">yang anda perlukan. Tumpukan kebajikan diri anda dengan pilihan bayaran balik kami yang fleksibel dan proses kelulusan yang pantas.</span>'
      },
      textMedicalLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

      textEducationLoanServices: { en: 'EDUCATION LOAN', bm: 'PEMBIAYAAN PENDIDIKAN'},
      textEducationLoanServicesP: { 
        en: 'Concentrate on your education without the financial burden! Our education loans cover your tuition <span class="dots"> ... </span><span class="more">fees, textbooks & living expenses, letting you focus on your studies. With favorable repayment terms, furthering your studies are made easy.</span>', 
        bm: 'Tumpukan pada pendidikan anda tanpa beban kewangan! Pembiayaan Pendidikan kami <span class="dots"> ... </span><span class="more">merangkumi yuran tuisyen, buku teks & keperluan harian agar anda dapat fokus pada pembelajaran anda. Dengan pelan bayaran balik yang mesra pelajar, melanjutkan pelajaran menjadi lebih mudah.</span>'
      },
      textEducationLoanRead: { en: 'Read More', bm: 'Baca Lagi' },

    
      //Banner Free Loan Consultation
      textFreeLoanCon: { en: 'Free Loan Consultation', bm: 'Konsultasi Pinjaman Percuma' },
      textFreeLoanConP: { 
        en: 'Do not wait any longer to try out our execellent service!', 
        bm: 'Jangan tunggu lagi untuk mencuba perkhidmatan terbaik kami!' 
      },
      textContactUsBtn: { en: 'Contact Us', bm: 'Hubungi Kami' },


      //Personal Loan Calculator
      textPersonalLoanCal: { en: 'Personal Loan Calculator', bm: 'Kalkulator Pinjaman Peribadi' },
      textLoanAmount: { en: 'Loan Amount:', bm: 'Jumlah Pinjaman:' },
      textTenure: { en: 'Tenure (in months):', bm: 'Tempoh (dalam bulan):' },

      textYourMonthlyPayment: { en: 'Your Monthly Payment:', bm: 'Bayaran Bulanan Anda:' },
      textTotalAmount: { 
        en: 'Total amount you pay in&nbsp;<span class="loan-tenure-value"></span> &nbsp;months', 
        bm: 'Jumlah amaun yang anda bayar dalam&nbsp;<span class="loan-tenure-value"></span> &nbsp;bulan' 
      },
      textApplyNowBtn: { en: 'Apply Now ', bm: 'Mohon Sekarang ' },



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


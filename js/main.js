(function () {
  "use strict";

  var root = document.documentElement;
  var header = document.getElementById("siteHeader");
  var nav = document.getElementById("siteNav");
  var menuButton = document.getElementById("menuButton");
  var year = document.getElementById("currentYear");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("motion-ready");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function setMenu(open) {
    if (!nav || !menuButton) return;
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", open);
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1020) setMenu(false);
    });
  }

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  var revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6%" });

    revealItems.forEach(function (item) { revealObserver.observe(item); });
  }

  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-30% 0px -62%", threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  var serviceSelect = document.getElementById("cfService");
  var serviceLinks = document.querySelectorAll(".service-cta[data-service]");

  if (serviceSelect && serviceLinks.length) {
    serviceLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        serviceSelect.value = link.getAttribute("data-service") || "";
      });
    });
  }

  var solutionDetails = {
    education: {
      sector: "Education",
      title: "School and education operations",
      intro: "BQ can design a connected school management system that reduces repetitive administration and gives staff a clearer view of learners, finances and daily activity.",
      capabilities: [
        "Student enrolment and profile records",
        "Attendance, results and academic reporting",
        "Fee tracking, statements and payment records",
        "Parent, student and staff communication",
        "Role based access for administrators and teachers"
      ],
      audience: "Primary and secondary schools, colleges, training centres and growing education groups.",
      contactService: "Software development"
    },
    finance: {
      sector: "Finance",
      title: "Finance and professional services",
      intro: "BQ can turn document heavy financial and professional workflows into a secure system with clearer approvals, records and management visibility.",
      capabilities: [
        "Client and engagement records",
        "Document submission and approval workflows",
        "Operational dashboards and reporting",
        "Automated reminders and routine task support",
        "Controlled access and activity records"
      ],
      audience: "Accounting practices, consultants, advisory firms and professional service teams.",
      contactService: "Software development"
    },
    retail: {
      sector: "Retail",
      title: "Retail and inventory",
      intro: "BQ can connect sales, stock and purchasing information so retail teams spend less time reconciling records and more time serving customers.",
      capabilities: [
        "Inventory movement and stock visibility",
        "Sales and payment workflow integration",
        "Purchasing and supplier records",
        "Branch level and management reporting",
        "Online ordering and customer portals"
      ],
      audience: "Retail shops, wholesalers, distributors and businesses operating across several locations.",
      contactService: "Software development"
    },
    healthcare: {
      sector: "Healthcare",
      title: "Healthcare organisations",
      intro: "BQ can improve administrative and service workflows with dependable systems designed around how healthcare staff coordinate information and daily operations.",
      capabilities: [
        "Patient administration and appointment records",
        "Billing and payment workflow support",
        "Pharmacy and supply inventory visibility",
        "Staff scheduling and internal coordination",
        "Secure access and operational reporting"
      ],
      audience: "Clinics, pharmacies, diagnostic centres and healthcare administration teams.",
      contactService: "Software development"
    },
    logistics: {
      sector: "Logistics",
      title: "Logistics and field operations",
      intro: "BQ can give distributed teams one reliable place to coordinate inventory, field activity, deliveries and the information managers need to respond quickly.",
      capabilities: [
        "Warehouse and inventory records",
        "Dispatch and delivery workflow tracking",
        "Field team updates and task assignment",
        "Operational alerts and exception reporting",
        "Mobile friendly tools for teams on the move"
      ],
      audience: "Logistics providers, distributors, warehouse teams and organisations with field operations.",
      contactService: "Software development"
    },
    hospitality: {
      sector: "Hospitality",
      title: "Hospitality and service businesses",
      intro: "BQ can connect the customer journey with the operational work behind it, creating a smoother experience for guests and a clearer workflow for staff.",
      capabilities: [
        "Booking and guest information workflows",
        "Payment and service request records",
        "Housekeeping and staff task coordination",
        "Inventory and supplier visibility",
        "Customer communication and reporting"
      ],
      audience: "Hotels, lodges, restaurants, event venues and customer service businesses.",
      contactService: "Software development"
    },
    ngo: {
      sector: "Nonprofit",
      title: "NGO software solutions",
      intro: "BQ can build practical programme management tools that help nonprofit teams coordinate people, activities, funding information and evidence of their work.",
      capabilities: [
        "Programme and beneficiary records",
        "Field data collection and activity tracking",
        "Project budget and document organisation",
        "Donor and management reporting",
        "Team permissions and secure information access"
      ],
      audience: "Nonprofit organisations, foundations, community programmes and development projects.",
      contactService: "Software development"
    },
    microfinance: {
      sector: "Microfinance",
      title: "Microfinance operations",
      intro: "BQ can create a secure operational system that guides teams from customer onboarding through loan administration, collections and portfolio reporting.",
      capabilities: [
        "Customer onboarding and profile management",
        "Loan application and approval workflows",
        "Disbursement and repayment schedule records",
        "Collections follow up and automated reminders",
        "Portfolio dashboards and activity records"
      ],
      audience: "Microfinance institutions, savings groups, lenders and community finance programmes.",
      contactService: "Software development"
    },
    engineering: {
      sector: "Engineering",
      title: "Engineering companies",
      intro: "BQ can connect office and site teams through systems that keep project information, documents, tasks and technical resources organised.",
      capabilities: [
        "Project planning and progress records",
        "Site reports and issue tracking",
        "Drawing and document control workflows",
        "Procurement and equipment visibility",
        "Technical workstations built for demanding software"
      ],
      audience: "Construction firms, engineering consultancies, contractors, architects and technical project teams.",
      contactService: "Software development"
    },
    computers: {
      sector: "Computing",
      title: "Custom computer builds",
      intro: "BQ can specify and assemble a computer around the work it must perform, balancing processing power, graphics, memory, storage, cooling and future upgrades.",
      capabilities: [
        "Workload and software requirement consultation",
        "Compatible component selection and sourcing",
        "Professional assembly and system configuration",
        "Performance, cooling and stability testing",
        "A practical upgrade path for future needs"
      ],
      audience: "Gamers, creators, engineers, AI teams, editors and businesses needing dependable desktop performance.",
      contactService: "Custom PC and workstation builds"
    },
    insurance: {
      sector: "Insurance",
      title: "Insurance service software",
      intro: "BQ can organise the service process from customer enquiry to ongoing policy support, helping teams manage information and follow up more consistently.",
      capabilities: [
        "Customer and policy information records",
        "Quotation and approval workflows",
        "Renewal reminders and service follow up",
        "Claims activity and document tracking",
        "Management dashboards and access controls"
      ],
      audience: "Insurance agencies, brokers, service teams and organisations managing protection products.",
      contactService: "Software development"
    },
    government: {
      sector: "Public sector",
      title: "Government and public institutions",
      intro: "BQ can help public service teams replace fragmented manual processes with responsible digital workflows that improve internal coordination and access to information.",
      capabilities: [
        "Citizen and service request portals",
        "Internal review and approval workflows",
        "Document and institutional record management",
        "Operational reporting and management dashboards",
        "Secure access for different teams and responsibilities"
      ],
      audience: "Government departments, local authorities, public agencies and service delivery programmes.",
      contactService: "Software development"
    }
  };

  var solutionDialog = document.getElementById("solutionDialog");
  var solutionDialogClose = document.getElementById("solutionDialogClose");
  var solutionDialogSector = document.getElementById("solutionDialogSector");
  var solutionDialogTitle = document.getElementById("solutionDialogTitle");
  var solutionDialogIntro = document.getElementById("solutionDialogIntro");
  var solutionDialogCapabilities = document.getElementById("solutionDialogCapabilities");
  var solutionDialogAudience = document.getElementById("solutionDialogAudience");
  var solutionDialogCta = document.getElementById("solutionDialogCta");
  var solutionButtons = document.querySelectorAll(".solution-learn[data-solution]");
  var lastSolutionTrigger = null;
  var activeSolution = null;

  function finishClosingSolutionDialog() {
    document.body.classList.remove("dialog-open");
    if (lastSolutionTrigger) lastSolutionTrigger.focus();
  }

  function closeSolutionDialog() {
    if (!solutionDialog) return;
    if (typeof solutionDialog.close === "function" && solutionDialog.open) {
      solutionDialog.close();
    } else {
      solutionDialog.removeAttribute("open");
      finishClosingSolutionDialog();
    }
  }

  function openSolutionDialog(key, trigger) {
    var detail = solutionDetails[key];
    if (!detail || !solutionDialog || !solutionDialogCapabilities) return;

    activeSolution = detail;
    lastSolutionTrigger = trigger;
    solutionDialogSector.textContent = detail.sector;
    solutionDialogTitle.textContent = detail.title;
    solutionDialogIntro.textContent = detail.intro;
    solutionDialogAudience.textContent = detail.audience;
    solutionDialogCapabilities.textContent = "";

    detail.capabilities.forEach(function (capability) {
      var item = document.createElement("li");
      item.textContent = capability;
      solutionDialogCapabilities.appendChild(item);
    });

    document.body.classList.add("dialog-open");
    if (typeof solutionDialog.showModal === "function") {
      solutionDialog.showModal();
    } else {
      solutionDialog.setAttribute("open", "");
    }
  }

  if (solutionDialog && solutionButtons.length) {
    solutionButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        openSolutionDialog(button.getAttribute("data-solution"), button);
      });
    });

    if (solutionDialogClose) {
      solutionDialogClose.addEventListener("click", closeSolutionDialog);
    }

    solutionDialog.addEventListener("click", function (event) {
      if (event.target === solutionDialog) closeSolutionDialog();
    });

    solutionDialog.addEventListener("close", finishClosingSolutionDialog);

    if (solutionDialogCta) {
      solutionDialogCta.addEventListener("click", function () {
        if (serviceSelect && activeSolution) {
          serviceSelect.value = activeSolution.contactService;
        }
        closeSolutionDialog();
      });
    }
  }
})();

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="give-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Give</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Give</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">Partnering in Ministry</h2>
            <p class="lead mb-4">Your generosity makes a difference</p>
            <p>At LINK PH, we believe that giving is an act of worship. When you give, you're partnering with us to share the love of Christ and make a difference in our community and beyond.</p>
            <p>Your faithful giving supports our various ministries, outreach efforts, and the ongoing operations of our church. We are committed to being good stewards of every gift received.</p>
            <div class="scripture-box p-4 bg-light rounded mt-4">
              <p class="mb-0 fst-italic">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
              <p class="mb-0 text-end">- 2 Corinthians 9:7</p>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="https://source.unsplash.com/random/700x500/?giving,hands" alt="Giving" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Giving Methods Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Ways to Give</h2>
            <p class="lead">Choose the giving method that works best for you</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="give-method-card p-4 bg-white rounded shadow-sm h-100 text-center">
              <div class="give-icon mb-3">
                <i class="fas fa-church fa-3x"></i>
              </div>
              <h4 class="mb-3">In Person</h4>
              <p>You can give during our Sunday services or drop by our church office during business hours.</p>
              <RouterLink to="/visit" class="btn btn-outline-primary mt-3">Service Times</RouterLink>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="give-method-card p-4 bg-white rounded shadow-sm h-100 text-center">
              <div class="give-icon mb-3">
                <i class="fas fa-globe fa-3x"></i>
              </div>
              <h4 class="mb-3">Online</h4>
              <p>Give securely online through our giving platform. One-time or recurring options available.</p>
              <a href="#online-giving" class="btn btn-outline-primary mt-3">Give Online</a>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="give-method-card p-4 bg-white rounded shadow-sm h-100 text-center">
              <div class="give-icon mb-3">
                <i class="fas fa-mobile-alt fa-3x"></i>
              </div>
              <h4 class="mb-3">Mobile App</h4>
              <p>Download our mobile app to give conveniently from your smartphone anytime, anywhere.</p>
              <a href="#" class="btn btn-outline-primary mt-3">Download App</a>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="give-method-card p-4 bg-white rounded shadow-sm h-100 text-center">
              <div class="give-icon mb-3">
                <i class="fas fa-money-check fa-3x"></i>
              </div>
              <h4 class="mb-3">Bank Transfer</h4>
              <p>Set up direct transfers from your bank account to our church account.</p>
              <a href="#bank-details" class="btn btn-outline-primary mt-3">Bank Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Online Giving Section -->
    <section id="online-giving" class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Online Giving</h2>
            <p class="lead">Give securely online with just a few clicks</p>
          </div>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="online-giving-card bg-white rounded shadow-sm p-4 p-md-5">
              <form>
                <div class="row mb-3">
                  <div class="col">
                    <h5 class="mb-3">Gift Amount</h5>
                    <div class="amount-options d-flex flex-wrap mb-3">
                      <div class="form-check me-4 mb-2">
                        <input class="form-check-input" type="radio" name="amount" id="amount1" value="500">
                        <label class="form-check-label" for="amount1">₱500</label>
                      </div>
                      <div class="form-check me-4 mb-2">
                        <input class="form-check-input" type="radio" name="amount" id="amount2" value="1000">
                        <label class="form-check-label" for="amount2">₱1,000</label>
                      </div>
                      <div class="form-check me-4 mb-2">
                        <input class="form-check-input" type="radio" name="amount" id="amount3" value="2000">
                        <label class="form-check-label" for="amount3">₱2,000</label>
                      </div>
                      <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="amount" id="amountCustom" value="custom">
                        <label class="form-check-label" for="amountCustom">Other</label>
                      </div>
                    </div>
                    <div class="custom-amount mb-3">
                      <label for="customAmount" class="form-label">Custom Amount (₱)</label>
                      <input type="number" class="form-control" id="customAmount" placeholder="Enter amount">
                    </div>
                  </div>
                </div>
                
                <div class="row mb-3">
                  <div class="col">
                    <h5 class="mb-3">Gift Type</h5>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="giftType" id="tithe" checked>
                      <label class="form-check-label" for="tithe">Tithe</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="giftType" id="offering">
                      <label class="form-check-label" for="offering">Offering</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="giftType" id="missions">
                      <label class="form-check-label" for="missions">Missions</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="giftType" id="buildingFund">
                      <label class="form-check-label" for="buildingFund">Building Fund</label>
                    </div>
                  </div>
                </div>
                
                <div class="row mb-3">
                  <div class="col">
                    <h5 class="mb-3">Giving Frequency</h5>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="frequency" id="oneTime" checked>
                      <label class="form-check-label" for="oneTime">One Time</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="frequency" id="weekly">
                      <label class="form-check-label" for="weekly">Weekly</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="frequency" id="monthly">
                      <label class="form-check-label" for="monthly">Monthly</label>
                    </div>
                  </div>
                </div>
                
                <div class="row mb-4">
                  <div class="col">
                    <h5 class="mb-3">Your Information</h5>
                    <div class="row mb-3">
                      <div class="col-md-6 mb-3 mb-md-0">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName">
                      </div>
                      <div class="col-md-6">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email Address</label>
                      <input type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">Phone Number</label>
                      <input type="tel" class="form-control" id="phone">
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary btn-lg px-5">Give Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bank Details Section -->
    <section id="bank-details" class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Bank Transfer Details</h2>
            <p class="lead">Set up a direct bank transfer to our church account</p>
          </div>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="bank-details-card bg-white rounded shadow-sm p-4 p-md-5">
              <div class="row mb-4">
                <div class="col">
                  <h5 class="border-bottom pb-2 mb-3">Account Information</h5>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td width="40%"><strong>Account Name:</strong></td>
                        <td>LINK Philippines Church, Inc.</td>
                      </tr>
                      <tr>
                        <td><strong>Account Number:</strong></td>
                        <td>1234-5678-9012-3456</td>
                      </tr>
                      <tr>
                        <td><strong>Bank Name:</strong></td>
                        <td>BDO Bank</td>
                      </tr>
                      <tr>
                        <td><strong>Branch:</strong></td>
                        <td>City Center Branch</td>
                      </tr>
                      <tr>
                        <td><strong>Swift Code:</strong></td>
                        <td>BNORPHMM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="row">
                <div class="col">
                  <h5 class="border-bottom pb-2 mb-3">Important Notes</h5>
                  <ul class="mb-0">
                    <li>Please include your name in the reference field when making transfers.</li>
                    <li>If giving for a specific purpose (e.g., missions, building fund), please indicate this in the reference field.</li>
                    <li>For assistance with bank transfers, please contact our finance team at finance@linkph.org.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Stewardship Stories</h2>
            <p class="lead">How your giving makes a difference</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm h-100">
              <div class="testimonial-content mb-3">
                <p class="font-italic">"Through the faithful giving of our church members, we were able to provide food and supplies to over 500 families affected by last year's typhoon. Your generosity brought hope during a very difficult time."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <img src="https://source.unsplash.com/random/80x80/?man" alt="Testimonial Author" class="rounded-circle me-3" width="60">
                <div>
                  <h5 class="mb-1">Pastor John Doe</h5>
                  <p class="mb-0 text-muted">Lead Pastor</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm h-100">
              <div class="testimonial-content mb-3">
                <p class="font-italic">"As a youth who grew up in this church, I've seen how the church's investment in youth programs has shaped my life and faith. I'm now pursuing ministry because of the mentorship I received here."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <img src="https://source.unsplash.com/random/80x80/?young,man" alt="Testimonial Author" class="rounded-circle me-3" width="60">
                <div>
                  <h5 class="mb-1">Daniel Santos</h5>
                  <p class="mb-0 text-muted">Youth Ministry Intern</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm h-100">
              <div class="testimonial-content mb-3">
                <p class="font-italic">"Our outreach program has been able to provide weekly Bible studies in three local schools. We've seen dozens of students come to know Christ through this ministry that's supported by our church giving."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <img src="https://source.unsplash.com/random/80x80/?woman" alt="Testimonial Author" class="rounded-circle me-3" width="60">
                <div>
                  <h5 class="mb-1">Maria Garcia</h5>
                  <p class="mb-0 text-muted">Outreach Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Frequently Asked Questions</h2>
            <p class="lead">Common questions about giving</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="accordion" id="givingFAQ">
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is tithing and why is it important?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#givingFAQ">
                  <div class="accordion-body">
                    Tithing is the biblical practice of giving the first 10% of our income back to God through the local church. It's a way of acknowledging that everything we have comes from God and expressing our trust in Him to provide for our needs. Tithing supports the work of the church and helps extend God's Kingdom on earth.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Is online giving secure?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#givingFAQ">
                  <div class="accordion-body">
                    Yes, our online giving platform uses industry-standard encryption and security protocols to ensure your information is protected. We partner with trusted payment processors to handle all transactions securely. Your personal and financial information is never stored on our church servers.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How is my giving used by the church?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#givingFAQ">
                  <div class="accordion-body">
                    Your giving supports various aspects of our church's ministry, including weekly worship services, children's and youth programs, community outreach, missions, staff salaries, facility maintenance, and administrative costs. We are committed to transparency and good stewardship, with financial reports available to church members.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Can I get a receipt for tax purposes?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#givingFAQ">
                  <div class="accordion-body">
                    Yes, we provide annual giving statements for tax purposes. These are typically sent out in January for the previous year's giving. If you need a statement at any other time, please contact our finance team at finance@linkph.org.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-5 text-white">
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4">Thank You for Your Support</h2>
            <p class="lead mb-4">Your generosity helps us reach more people with the love of Christ.</p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Contact Us with Questions</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  padding: 80px 0 30px;
  margin-bottom: 50px;
}

.page-header, .page-header h1, .page-header nav, .page-header .breadcrumb, .page-header .breadcrumb-item, .page-header .breadcrumb-item a {
  color: #fff !important;
}
.page-header .breadcrumb-item.active {
  color: #f0f0f0 !important;
}
.page-header .breadcrumb-item a {
  text-decoration: underline;
}

.scripture-box {
  border-left: 4px solid var(--accent-color);
}

.give-method-card {
  transition: all 0.3s ease;
}

.give-method-card:hover {
  transform: translateY(-10px);
}

.give-icon {
  color: var(--primary-color);
}

.online-giving-card, .bank-details-card {
  transition: all 0.3s ease;
}

.form-control {
  padding: 0.75rem 1.25rem;
  border-color: #e9ecef;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgba(58, 90, 151, 0.25);
}

.testimonial-content {
  position: relative;
  padding: 20px;
  background-color: rgba(58, 90, 151, 0.05);
  border-radius: 10px;
}

.testimonial-content:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 20px;
  border-width: 10px 10px 0;
  border-style: solid;
  border-color: rgba(58, 90, 151, 0.05) transparent transparent;
}

.testimonial-content p {
  margin-bottom: 0;
  font-style: italic;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(58, 90, 151, 0.1);
  color: var(--primary-color);
  font-weight: 600;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(58, 90, 151, 0.1);
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%233a5a97'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style> 
<template>
<section id="dashboard">
    <nav class="nav justify-content-center" id="play-header">
        <h1 class="ml-auto pt-3">Shecluded</h1>
        <button class="btn ml-auto logout-button">LOGOUT</button>
    </nav>
    <div class="row pl-5 pr-5">
        <div class="col-lg-3 grid">
            <div class="card mini-card">
                <img src="img/avatar2.png" class="card-img-top rounded-circle mx-auto mt-5" alt="..." />
                <h5 class="text-center mt-4">Adesanya Johnson</h5>
                <div class="card-body">
                    <p class="card-text text-center">I am a business woman building a fashion brand and empowering young fashion entreprenuers.</p>
                    <div class="row pl-4 pr-4">
                        <div class="col-3 icon">
                            <img src="img/blank.png" />
                        </div>
                        <div class="col-3 icon">
                            <img src="img/blank.png" />
                        </div>
                        <div class="col-3 icon">
                            <img src="img/blank.png" />
                        </div>
                        <div class="col-3 icon">
                            <img src="img/blank.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card2 mt-4">
                <div class="card-body">
                    <div class="row"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-9 grid">
            <div>
                <div class="card card-main">
                    <div class="card-body">
                        <div class="d-flex justify-content-between head-row">
                            <p class="mr-auto">Overview</p>
                            <button class="btn">pay Now</button>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 text-center mt-4 small-card">
                                <img src="/img/hand.png" class="mb-3" />
                                <h2>$1,000,0000</h2>
                                <p class="info">Amount Loaned</p>
                            </div>
                            <div class="col-lg-4 text-center mt-4 small-card">
                                <img src="/img/naira.png" class="mb-3" />
                                <h2>$1,000,0000</h2>
                                <p class="info">Amount Loaned</p>
                            </div>
                            <div class="col-lg-4 text-center mt-4">
                                <p class="info mb-3">
                                    <span>
                                        <img src="/img/data-icon.png" class="mr-2 mb-3" />
                                    </span>Due on Aug 22nd
                                </p>
                                <h2>$1,000,0000</h2>
                                <p class="info">Amount Loaned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4">
                    <div class="card mb-3" style="max-width: 18rem;">
                        <div class="">
                            <div class="d-flex justify-content-between">
                                <div class="mr-auto pl-3 pt-3">
                                    <img src="/img/book.png" class="mb-3" />
                                </div>
                                <div class="ml-auto shape">
                                    <img src="/img/book2.png" />
                                </div>
                            </div>
                            <div class="pl-3 pt-3">
                                <h2 class="card-title">Take Loan<br> Course</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-3" style="max-width: 18rem;">
                        <div class="">
                            <div class="d-flex justify-content-between">
                                <div class="mr-auto pl-3 pt-3">
                                    <img src="/img/money.png" class="mb-1" />
                                </div>
                                <div class="ml-auto shape2">
                                    <img src="/img/money2.png" />
                                </div>
                            </div>
                            <div class="pl-3 pt-3">
                                <h2 class="card-title">Apply For<br>Loan</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-3" style="max-width: 18rem;">
                        <div class="">
                            <div class="d-flex justify-content-between">
                                <div class="mr-auto pl-3 pt-3">
                                    <img src="/img/coin.png" class="mb-1" />
                                </div>
                                <div class="ml-auto shape">
                                    <img src="/img/coin2.png" />
                                </div>
                            </div>
                            <div class="pl-3 pt-3">
                                <h2 class="card-title">Take Loan<br> Course</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4">
                    <div class="card mb-3" style="max-width: 18rem;">
                        <div class="">
                            <div class="pl-3 pt-3 mt-5 loan">
                                <h2 class="card-title">View My<br>Loans</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-3" style="max-width: 40rem;">
                        <div class="">
                            <div class="d-flex justify-content-between table-row">
                                <p class="mr-auto">Transaction</p>
                                <button class="btn">View all</button>
                            </div>
                            <div class="pl-3 pt-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="date">Sept 06</th>
                                                <td class="table-text">Business Loan</td>
                                                <td><button class="btn table-btn">Credit</button></td>
                                                <td class="amount">₦ 100,000.00</td>
                                            </tr>
                                            <tr>
                                                <th class="date">Sept 06</th>
                                                <td class="table-text">Loan repayment</td>
                                                <td><button class="btn table-btn">Credit</button></td>
                                                <td class="amount">₦ 100,000.00</td>
                                            </tr>
                                            <tr>
                                                <th class="date">Sept 06</th>
                                                <td class="table-text">Business Loan</td>
                                                <td><button class="btn table-btn">Credit</button></td>
                                                <td class="amount">₦ 100,000.00</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
#dashboard {
    background-color: #e5e5e5 !important;
}

#dashboard .rounded-circle {
    width: 140px !important;
}

#dashboard ul li {
    list-style: none;
}

ul li:hover,
ul li:active {
    border-bottom: 5px solid #fff;
}

#dashboard ul li a {
    font-family: Circular Std;
    font-size: 20px;
    line-height: normal;
    color: #f740ac;
}

#dashboard ul li a:hover,
ul li a:active {
    text-decoration: none;
}

#dashboard button {
    color: white;
    background-color: #808080;
    padding: 0.2rem 0.5rem 0.3rem 0.5rem;
    font-size: 14px;
}

#dashboard button:hover {
    color: rgb(201, 238, 213);
}

#dashboard #play-header {
    background: #ffffff;
    color: #f740ac;
}

.logout-button {
    width: 150px !important;
    height: 73px !important;
    border-radius: 0 !important;
}

#dashboard .mini-card {
    margin-top: 50px;
    width: auto;
}

#dashboard .card-main {
    margin-top: 50px;
    min-width: auto;
}

#dashboard .head-row {
    border-bottom: 0.25px solid #f740ac;
    width: auto;
    padding-bottom: 15px;
}

#dashboard .table-row {
    border-bottom: 0.25px solid #f740ac;
    width: auto;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 25px;

}

#dashboard .table-row {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #141414;
}

#dashboard .table-row button {
    background: #F740AC;
    border-radius: 4px;
    width: 92px;
    height: 34px;
}

#dashboard .table .date {
    font-family: Roboto;
    font-style: normal;
    font-size: 15px;
    line-height: 32px;
    color: #696969;
}

#dashboard .table .table-btn {
    background: #F740AC;
    border-radius: 4px;
    width: 73px;
    height: 26px;
}

#dashboard .table .amount {
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    line-height: 32px;
    color: #696969;

}

#dashboard .table .table-text {
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    line-height: 32px;
    color: #696969;
}

#dashboard .head-row .btn {
    background: #f740ac;
    border-radius: 4px;
    width: 92px;
    height: 34px;
}

#dashboard .info {
    color: #858484;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
}

#dashboard h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 53px;
    /* identical to box height */

    color: #5a5a5a;
}

#dashboard .small-card {
    border-right: 0.25px solid #f740ac;
}

#dashboard h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 36px;
}

#dashboard .card-text {
    color: #535353;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
}

#dashboard .icon {
    width: 50px !important;
}

#dashboard .card2 {
    min-width: auto;
    height: 50px;
    background: #f740ac;
}

#dashboard .shape {
    margin-right: 0px !important;
}

#dashboard .shape img {
    width: 60px !important;

}

#dashboard .shape2 img {
    width: 90px !important;

}

#dashboard .loan {
    margin-bottom: 43px !important;
}

@media screen and (max-width: 991px) {
    #dashboard .small-card {
        border-right: none;
        border-bottom: 0.25px solid #f740ac !important;
    }
}
@media screen and (min-width: 1050px) {
  #dashboard .grid {
    padding: 50px !important;
  }
}
</style>

<script>
</script>

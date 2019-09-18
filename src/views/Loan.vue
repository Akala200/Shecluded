<template>
<section id="loan">
    <nav class="nav justify-content-center" id="play-header">
        <h1 class="ml-auto pt-3">Shecluded</h1>
        <button class="btn ml-auto logout-button">LOGOUT</button>
    </nav>
    <div class="row pl-5 pr-5">
        <div class="col-lg-3">
            <div class="card mini-card">
                <img src="img/avatar2.png" class="card-img-top rounded-circle mx-auto mt-5" alt="..." />
                <h5 class="text-center mt-4">Adesanya Johnson</h5>
                <div class="card-body">
                    <p class="card-text text-center">I am a business woman building a fashion brand and empowering young fashion entreprenuers.</p>
                    <div class="row pl-4 pr-4 cir">
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
        <div class="col-lg-9">
            <div class="row">
                <h3 class="h2"><span class="mr-3"><img src="img/arrow.png" /></span>Apply For A Loan</h3>
            </div>
            <div class="row">
                <form class="mr-auto">
                    <label>Repayment Term</label>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Amount">
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                        <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                        <div class="invalid-feedback">Example invalid custom file feedback</div>
                    </div>
                    <div class="form-group mt-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Tell us a little more you" rows="3"></textarea>
                    </div>
                    <div class="row form-group">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <input type="tel" class="form-control tel" placeholder="09088783636">
                        </div>
                        <div class="col-lg-6 col-md-6  col-sm-6">
                            <input type="text" class="form-control dob" placeholder="DOB">
                        </div>
                    </div>
                    <button class="btn button mx-auto mt-3" type="button">
                        NEXT
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
#loan {
    background-color: #e5e5e5 !important;
}
#loan form {
      margin-top: 40px;
    width: 300px;
     margin-left: 90px  !important;   
}



#loan .rounded-circle {
    width: 140px !important;
}

#loan ul li {
    list-style: none;
}

ul li:hover,
ul li:active {
    border-bottom: 5px solid #fff;
}

#loan ul li a {
    font-family: Circular Std;
    font-size: 20px;
    line-height: normal;
    color: #f740ac;
}

#loan .loan2 .card-title2 {
    color: #ffffff !important;
    margin-top: 75px !important;
}

#loan .h2 {
    margin-top: 50px !important;
}

#loan .h2 span img {
    width: 50px !important;
}

#loan .invite {
    background: #F740AC;
}

#loan ul li a:hover,
ul li a:active {
    text-decoration: none;
}

#loan button {
    color: white;
    background-color: #808080;
    padding: 0.2rem 0.5rem 0.3rem 0.5rem;
    font-size: 14px;
}

#loan button:hover {
    color: rgb(201, 238, 213);
}

#loan #play-header {
    background: #ffffff;
    color: #f740ac;
}

.logout-button {
    width: 150px !important;
    height: 73px !important;
    border-radius: 0 !important;
}

#loan .mini-card {
    margin-top: 50px;
    width: auto;
}

#loan .card-main {
    margin-top: 50px;
    min-width: auto;
}

#loan input {
    width: 500px;
    height: 48px;
    background: #FFFFFF;
    border: 0.75px solid rgba(20, 20, 20, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
}


#loan .dob {
width: 245px !important;
height: 48px;
background: #FFFFFF;
border: 0.75px solid rgba(20, 20, 20, 0.25);
box-sizing: border-box;
border-radius: 4px;

}
#loan .tel {
   
width: 245px !important;
height: 48px;
background: #FFFFFF;
border: 0.75px solid rgba(20, 20, 20, 0.25);
box-sizing: border-box;
border-radius: 4px;

}


#loan::placeholder {
    width: 43px;
    height: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    color: #7D7D7D;

}

#loan .loan .card #loan .head-row {
    border-bottom: 0.25px solid #f740ac;
    width: auto;
    padding-bottom: 15px;
}

#loan .table-row {
    border-bottom: 0.25px solid #f740ac;
    width: auto;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 25px;

}

#loan .table-row {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #141414;
}

#loan .table-row button {
    background: #F740AC;
    border-radius: 4px;
    width: 92px;
    height: 34px;
}

#loan .table .date {
    font-family: Roboto;
    font-style: normal;
    font-size: 15px;
    line-height: 32px;
    color: #696969;
}

#loan .table .table-btn {
    background: #F740AC;
    border-radius: 4px;
    width: 73px;
    height: 26px;
}

#loan .table .amount {
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    line-height: 32px;
    color: #696969;

}

#loan .table .table-text {
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    line-height: 32px;
    color: #696969;
}

#loan .head-row .btn {
    background: #f740ac;
    border-radius: 4px;
    width: 92px;
    height: 34px;
}

#loan .info {
    color: #858484;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
}

#loan h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 53px;
    /* identical to box height */
    color: #5a5a5a;
}

#loan .small-card {
    border-right: 0.25px solid #f740ac;
}

#loan h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 36px;
}

#loan .card-text {
    color: #535353;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
}

#loan .icon {
    width: 50px !important;
}

#loan .card2 {
    min-width: auto;
    height: 50px;
    background: #f740ac;
}

#loan .shape {
    margin-right: 0px !important;
}

#loan .shape img {
    width: 60px !important;

}

#loan .shape2 img {
    width: 90px !important;

}

#loan .loan {
    margin-bottom: 43px !important;
}

@media screen and (max-width: 991px) {
    #loan .small-card {
        border-right: none;
        border-bottom: 0.25px solid #f740ac !important;
    }
}

@media only screen and (min-width: 599px) and (max-width: 1026px) {
    #loan .card-ga {

        margin-bottom: -81px !important;

    }

    #loan .mini-card {
        margin-top: 0px !important;
    }

    #loan .card-ga2 {

        margin-bottom: -48px !important;

    }
    #loan form {
      margin-top: 40px;
    width: 500px;
    margin-left: 20px  !important;
}

#loan input {
    width: 500px !important;
    height: 48px;
    background: #FFFFFF;
    border: 0.75px solid rgba(20, 20, 20, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
}

#loan .dob {
width: 235px !important;
height: 48px;
background: #FFFFFF;
border: 0.75px solid rgba(20, 20, 20, 0.25);
box-sizing: border-box;
border-radius: 4px;

}

#loan .tel {
width: 235px !important;
height: 48px;
background: #FFFFFF;
border: 0.75px solid rgba(20, 20, 20, 0.25);
box-sizing: border-box;
border-radius: 4px;

}

}

@media only screen and (min-width: 900px) and (max-width: 1099px) {
    #loan .card-ga {

        margin-bottom: -81px !important;

    }

    #loan .card-ga2 {

        margin-bottom: -48px !important;

    }

    #loan .card-ga {

        margin-bottom: -81px !important;

    }

    #loan .mini-card {
        width: 210px !important;
    }

    #loan .cir {
        padding-left: 2px !important;

    }
    #loan form {
      margin-top: 40px;
    width: 500px;
    margin-left: 90px  !important;
}

}

@media screen and (min-width: 1350px) {
    #loan .card-main {
        margin-top: 50px;
        width: 999px !important;
    }

    #loan .card-ga {

        margin-bottom: -81px !important;

    }

    #loan .card-ga2 {

        margin-bottom: -48px !important;

    }

    #loan .card-ga {

        margin-bottom: -81px !important;

    }

    #loan .mini-card {
        width: 320px !important;
    }

    #loan .row-table {
        width: 660px;
    }
    #loan form {
      margin-top: 40px;
    width: 500px;
    margin-left: 90px  !important;
}


    #loan .card2[data-v-22ba47ca] {
        width: 320px !important;
        height: 50px;
        background: #f740ac;
    }

    #loan .side-card {
        width: 320px !important;
        height: 208px !important;
    }
}

@media only screen and (min-width: 1100px) and (max-width: 1300px) {
    #loan .card-main {
        margin-top: 50px;
        width: 880px !important;
    }

    #loan .mini-card {
        width: 280px !important;
    }

    #loan .card-ga {

        margin-bottom: -81px !important;

    }

    #loan .card-ga2 {

        margin-bottom: -48px !important;

    }

    #loan .side-card {
        width: 280px !important;
        height: 209px !important;
    }

    #loan .row-table {
        width: 580px;
    }

    #loan .card2[data-v-22ba47ca] {
        width: 280px !important;
        height: 50px;
        background: #f740ac;
    }

    #loan .h2 {
        margin-left: 90px !important;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        color: #525252;
    }
}
</style>

<script>
</script>

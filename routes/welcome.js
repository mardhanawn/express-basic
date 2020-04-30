function Welcome() {
    this.index = function (req,res,next) {
        res.render('welcome');
    }

    this.profile = function(req,res,next) {
        let data = {
            nama : 'Ardhana',
            alamat : 'Purwokerto',
            tgl : '17 Mei 2019'
        }
        res.render('profile', data);
    }
}
module.exports = Welcome;
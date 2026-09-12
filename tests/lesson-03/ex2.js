const chieuCao = 155;
const soLeChieuCao = chieuCao - 100;

const canNangLyTuong = soLeChieuCao * 9/10;
const canNangToiThieu = soLeChieuCao * 8/10;


if (chieuCao > 100 && chieuCao < 200)
{
console.log ('Cân nặng lý tưởng của bạn là: ' + canNangLyTuong, 'Cân nặng tối đa là: ' + soLeChieuCao, 'Cân nặng tối thiểu là: ' + canNangToiThieu );
}

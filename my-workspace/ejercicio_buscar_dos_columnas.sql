SELECT * FROM bancabd.movimientos where idCuenta in (select numeroCuenta from bancabd.cuentas where tipocuenta="ahorro");

SELECT * FROM bancabd.movimientos inner join bancabd.cuentas on movimientos.idCuenta = cuentas.numeroCuenta 
where cuentas.tipocuenta = "ahorro"; 

SELECT movimientos.* FROM bancabd.movimientos,bancabd.cuentas where  movimientos.idCuenta = cuentas.numeroCuenta and 
cuentas.tipocuenta = "ahorro"; 



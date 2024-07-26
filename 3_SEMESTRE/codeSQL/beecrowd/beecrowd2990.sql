select
  e.cpf as cpf,
  e.enome as enome,
  d.dnome as dnome
from
  empregados as e
  join departamentos as d on d.dnumero = e.dnumero
  left join trabalha as t on t.cpf_emp = e.cpf
where
  t.cpf_emp is null
order by
  e.cpf;
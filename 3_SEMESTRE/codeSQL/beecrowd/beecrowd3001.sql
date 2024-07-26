select
  p.name,
  case
    when (p.type = 'A') then 20.0
    when (p.type = 'B') then 70.0
    when (p.type = 'C') then 530.5
  end as price
from
  products as p
order by
  p.type,
  p.id desc;
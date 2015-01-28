echo '1.'
cat data-hold/legislators-current.json | jq '.[0] .name .last'

echo '2.'
cat data-hold/legislators-current.json | jq '.[111] .id .bioguide'

echo '3.'
cat data-hold/legislators-current.json | jq '.[13] .terms[2] .start'

echo '5.'
cat data-hold/legislators-current.json | \
  jq '.[] .bio .birthday' | sort -r | head -n 10 | tr -d '"'


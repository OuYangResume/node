//添加数据sql
// SET key id [FIELD name value ...] [EX seconds] [NX|XX] 
// (OBJECT geojson)|(POINT lat lon [z])|(BOUNDS minlat minlon maxlat maxlon)|(HASH geohash)|(STRING value)

examples

//SET fleet truck1 POINT 33.5123 -112.2693
//SET props house1 BOUNDS 33.7840 -112.1520 33.7848 -112.1512
//SET cities tempe OBJECT {"type":"Polygon","coordinates":[[[-111.9787,33.4411],[-111.8902,33.4377],[-111.8950,33.2892],[-111.9739,33.2932],[-111.9787,33.4411]]]}
//SET fleet truck1 FIELD speed 90 FIELD age 21 POINT 33.5123 -112.2693

//查找数据
//GET key id [WITHFIELDS] [OBJECT|POINT|BOUNDS|(HASH geohash)]
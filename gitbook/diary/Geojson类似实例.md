##  Geojson

GeoJSON是一种对各种地理数据结构进行编码的格式。GeoJSON对象可以表示几何、特征或者特征集合。GeoJSON支持下面几何类型：点、线、面、多点、多线、多面和几何集合。GeoJSON里的特征包含一个几何对象和其他属性，特征集合表示一系列特征。

一个完整的GeoJSON数据结构总是一个（JSON术语里的）对象。在GeoJSON里，对象由名/值对--也称作成员的集合组成。对每个成员来说，名字总是字符串。成员的值要么是字符串、数字、对象、数组，要么是下面文本常量中的一个："true","false"和"null"。数组是由值是上面所说的元素组成。

### Point  
对类型"Point"来说，“coordinates"成员必须是一个单独的位置
``` js
{ "type": "Point", "coordinates": [100.0, 0.0] }
```
### MultiPoint  
 对类型"MultiPoint"来说，"coordinates"成员必须是位置数组。
``` js
	{ "type": "MultiPoint",
  		"coordinates": [ [100.0, 0.0], [101.0, 1.0] ]
}
```
### LineString  
 对类型"LineString"来说，“coordinates"成员必须是两个或者多个位置的数组。
``` js
 { "type": "LineString",
  "coordinates": [ [100.0, 0.0], [101.0, 1.0] ]
  }
```
 ### MultiLineString
 对类型“MultiLineString"来说，"coordinates"成员必须是一个线坐标数组的数组。
``` js 
 { "type": "MultiLineString",
  "coordinates": [
      [ [100.0, 0.0], [101.0, 1.0] ],
      [ [102.0, 2.0], [103.0, 3.0] ]
    ]
  }
```
 ### Polygon
 对类型"Polygon"来说，"coordinates"成员必须是一个线性环坐标数组的数组。对拥有多个环的的面来说，第一个环必须是外部环，其他的必须是内部环或者孔。
 #### 无洞
``` js
 { "type": "Polygon",
  "coordinates": [
   [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0],[100.0,0.0]]
    ]
 }
```
#### 带洞
``` js 
{ "type": "Polygon",
  "coordinates": [
  [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
  [ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
    ]
 }
```
### MultiPlygon
对类型"MultiPlygon"来说，"coordinates"成员必须是面坐标数组的数组。
``` js
{ "type": "MultiPolygon",
  "coordinates": [
   [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
   [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
   [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
    ]
  }
```
### GeometryCollection
类型为"GeometryCollection"的GeoJSON对象是一个集合对象，它表示几何对象的集合。
几何集合必须有一个名字为"geometries"的成员。与"geometries"相对应的值是一个数组。这个数组中的每个元素都是一个GeoJSON几何对象。
``` js
{ "type": "GeometryCollection",
  "geometries": [
    { "type": "Point",
      "coordinates": [100.0, 0.0]
      },
    { "type": "LineString",
      "coordinates": [ [101.0, 0.0], [102.0, 1.0] ]
      }
  ]
}
```
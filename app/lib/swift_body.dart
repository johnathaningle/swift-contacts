import 'package:flutter/material.dart';
import 'package:swift/swift_threads.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class SwiftBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Container(
      child: StaggeredGridView.count(
        crossAxisCount: 2, //create two columns for the home screen
        crossAxisSpacing: 12.0,
        mainAxisSpacing: 12.0,
        padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
        children: <Widget>[
          _buildTile(
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween, //change this???
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      Text("Total Views", style: TextStyle(color: Colors.blueAccent)),
                      Text("200K", style: TextStyle(color: Colors.black)),
                    ],
                  ),
                  Material(
                    color: Colors.blueAccent,
                    borderRadius: BorderRadius.circular(24.0),
                    child: Center(
                      child: Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Icon(Icons.timeline, color: Colors.white, size: 30.0,),
                      ),
                    ),
                  )
                ],
              ),
            ),
          ),
          _buildTile(
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      Text("Shop Items", style: TextStyle(color: Colors.red),),
                      Text("173", style: TextStyle(color: Colors.black54),)
                    ],
                  ),
                  Material(
                    color: Colors.red,
                    borderRadius: BorderRadius.circular(24.0),
                    child: Center(
                      child: Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Icon(Icons.store, color: Colors.white, size: 30),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => ShopItemsPage()))
          ),
        ],
        staggeredTiles: [
          StaggeredTile.extent(2, 110.0),
          StaggeredTile.extent(2, 110.0),
          StaggeredTile.extent(1, 180.0),
          StaggeredTile.extent(2, 220.0),
          StaggeredTile.extent(2, 110.0),
        ],
      ),
    );
  }
}

Widget _buildTile(Widget child, {Function() onTap}) {
  return Material(
    elevation: 14.0,
    borderRadius: BorderRadius.circular(12.0),
    shadowColor: Colors.black26,
    child: InkWell(
      onTap: onTap != null ? () => onTap() : () { print("Not seen yet");},
      child: child,
    ),
  );
}
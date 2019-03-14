import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class SwiftBody extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _SwiftBodyState();
  }
}
class _SwiftBodyState extends State<SwiftBody> {
  @override
  Widget build(BuildContext context) {
    return new Container(
      child: StaggeredGridView.count(
        crossAxisCount: 2, //create two columns for the home screen
        crossAxisSpacing: 12.0,
        mainAxisSpacing: 12.0,
        padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
        children: <Widget>[
          _threadTile("A misc deal", "Bob Sally and Frank"),
          _threadTile("Acme Company Purchase", "Ceo Man")
        ],
        staggeredTiles: [
          StaggeredTile.extent(2,110.0),
          StaggeredTile.extent(2, 110.0),
          StaggeredTile.extent(1, 180.0),
          StaggeredTile.extent(2, 220.0),
          StaggeredTile.extent(2, 110.0),
        ],
      ),
    );
  }
}


Widget _threadTile(String threadTitle, String contactName, {Function() onTap}) {
  return Material(
    elevation: 14.0,
    borderRadius: BorderRadius.circular(12.0),
    shadowColor: Colors.black26,
    child: InkWell(
      onTap: onTap != null ? () => onTap() : () { print("Not seen yet");},
      child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween, //change this???
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  new Flexible(
                    child:Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          threadTitle, 
                          style: TextStyle(color: Colors.black, fontSize: 24.0),
                          overflow: TextOverflow.clip,
                          softWrap: false,
                        ),
                        Padding(
                          padding:EdgeInsets.only(top: 8.0),
                          child: Row(
                          children: <Widget>[
                            Icon(Icons.calendar_today),
                            Text("Last Messaged 3 Days Ago")
                          ],
                        ),
                        ),
                    ],
                  ),
                  ),
                  Column(children: <Widget>[
                    Icon(Icons.star_border),
                    Icon(Icons.arrow_drop_down),
                  ],)
                ],
              ),
            ),
    ),
  );
}
# true-sheet Android repro: parent sheet stuck after child presented while parent is hidden

Minimal repro for [`@lodev09/react-native-true-sheet`](https://github.com/lodev09/react-native-true-sheet) `4.0.0-beta.25` on Android (Expo SDK 58, React Native 0.88.0-rc.4).

```sh
npm install
npx expo run:android
```

## Steps

1. Tap **Push Modal**. The `fullScreenModal` hides the parent sheet.
2. Tap **Present Child, Go Back**. The child sheet is presented while the parent is hidden.
3. Tap **Show More** in the child sheet.
4. Swipe the child sheet down to dismiss it.
5. Try to drag the parent sheet up.

**Expected:** the parent returns to its detent and can be dragged.

**Actual:** the parent stays translated down to the child's height and can't be dragged.

`.npmrc` sets `legacy-peer-deps` because the library's `react-native >=0.82.0` peer range doesn't match the React Native release candidate.

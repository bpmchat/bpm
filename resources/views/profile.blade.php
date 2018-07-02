@extends('layouts.layout')

@section('content')
  <div id="profile">
    <profile></profile>
  </div>
@endsection

@section('sidebar')
    @include('sidebars.default', ['sidebar'=> $sidebar_designer])
@endsection

@section('js')
  <script src="{{mix('js/management/profile/index.js')}}"></script>
@endsection
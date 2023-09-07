using System;
using System.IO;
using System.Runtime.InteropServices;

Console.WriteLine($"Hello, {RuntimeInformation.RuntimeIdentifier} {RuntimeInformation.OSArchitecture}!");

var files = Directory.EnumerateFiles("/");
foreach (var file in files)
{
  Console.WriteLine(file);
}
